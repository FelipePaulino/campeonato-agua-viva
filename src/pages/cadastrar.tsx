import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useJogadores } from "../context/jogadoresContext";
import { jogadoresPorTime, Times } from "../constants/times";
import Link from "next/link";
import { JogadoresPorNome } from "@/types/jogadores-types";
import { useSnackbar } from "@/context/SnackbarContext";
import { useCartola } from "@/context/cartolaContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function Cadastrar() {
  const [time, setTime] = useState<Times | "">("");
  const [rodada, setRodada] = useState<number>(1);
  const [jogadores, setJogadores] = useState<JogadoresPorNome>({});
  const [diaCartola, setDiaCartola] = useState<number>(1);

  const { showSnackbar } = useSnackbar();
  const router = useRouter();
  const { reloadJogadores } = useJogadores();
  const { atualizarCartola, cartola } = useCartola();
  const { isAdmin } = useAuth();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  useEffect(() => {
    if (time) {
      const nomes = jogadoresPorTime[time] || [];
      const inicial = nomes.reduce((acc, nome) => {
        acc[nome] = { nota: "0", goleiro: false, gols: 0 };
        return acc;
      }, {} as JogadoresPorNome);
      setJogadores(inicial);
    }
  }, [time]);

  async function cadastrarTodos() {
    if (!time) {
      showSnackbar("Selecione um time!", "error");
      return;
    }

    const promessas = Object.entries(jogadores).map(
      ([nome, { nota, goleiro, gols }]) => {
        const notaNumber = parseFloat(nota.replace(",", "."));
        return axios.post(`${siteUrl}/jogadores.json`, {
          nome,
          time,
          rodada,
          nota: isNaN(notaNumber) ? 0 : notaNumber,
          goleiro,
          gols,
        });
      }
    );

    try {
      await Promise.all(promessas);
      showSnackbar("Cadastro realizado com sucesso!", "success");
      await reloadJogadores();
      router.push("/");
    } catch (error) {
      console.error("Erro ao cadastrar jogadores:", error);
      showSnackbar("Erro ao cadastrar, tente novamente.", "error");
    }
  }

  async function abrirCartola() {
    try {
      await atualizarCartola(diaCartola, true); // atualiza o registro existente ou cria se não houver
      showSnackbar(`Cartola aberta para o dia ${diaCartola}`, "success");
      router.push("/");
    } catch (err) {
      console.error(err);
      showSnackbar("Erro ao abrir Cartola", "error");
    }
  }

  async function fecharCartola() {
    try {
      await atualizarCartola(cartola!.DiaCartolaAtual, false); // fecha o cartola, mantendo o mesmo registro
      showSnackbar("Cartola fechada", "success");
      router.push("/");
    } catch (err) {
      console.error(err);
      showSnackbar("Erro ao fechar Cartola", "error");
    }
  }

  useEffect(() => {
    if (!isAdmin) router.push("/");
  });

  return (
    <ProtectedRoute>
      <div style={styles.container}>
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <label style={{ fontWeight: 600 }}>
              Dia Cartola:
              <select
                value={diaCartola}
                onChange={(e) => setDiaCartola(Number(e.target.value))}
                style={{ marginLeft: 8, padding: "6px 12px", borderRadius: 6 }}
              >
                {[1, 2, 3, 4, 5].map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={abrirCartola} style={styles.button}>
              Abrir Cartola
            </button>
            <button onClick={fecharCartola} style={styles.button}>
              Fechar Cartola
            </button>
          </div>
          <h1 style={styles.title}>➕ Cadastrar rodada por time</h1>
          <div style={styles.form}>
            <label style={styles.label}>
              Time:
              <select
                value={time}
                onChange={(e) => setTime(e.target.value as Times)}
                style={styles.select}
              >
                <option value="">-- Selecione o time --</option>
                {Object.values(Times).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label style={styles.label}>
              Rodada:
              <input
                type="number"
                value={rodada}
                min={1}
                onChange={(e) => setRodada(Number(e.target.value))}
                style={styles.input}
              />
            </label>
            {time &&
              Object.entries(jogadores).map(([nome, data]) => (
                <div key={nome} style={styles.jogadorLinha}>
                  <span style={styles.jogadorNome}>{nome}</span>
                  <input
                    type="number"
                    value={data.nota}
                    step={0.1}
                    style={styles.input}
                    onChange={(e) =>
                      setJogadores((prev) => ({
                        ...prev,
                        [nome]: { ...prev[nome], nota: e.target.value },
                      }))
                    }
                  />
                  <label style={styles.labelInline}>
                    Gols
                    <input
                      type="number"
                      value={data.gols}
                      min={0}
                      step={1}
                      style={styles.input}
                      onChange={(e) =>
                        setJogadores((prev) => ({
                          ...prev,
                          [nome]: {
                            ...prev[nome],
                            gols: Math.floor(Number(e.target.value)),
                          },
                        }))
                      }
                    />
                  </label>
                  <label style={styles.labelInline}>
                    Goleiro
                    <input
                      type="checkbox"
                      checked={data.goleiro}
                      onChange={(e) =>
                        setJogadores((prev) => ({
                          ...prev,
                          [nome]: { ...prev[nome], goleiro: e.target.checked },
                        }))
                      }
                      style={styles.checkbox}
                    />
                  </label>
                </div>
              ))}
            {time && (
              <button onClick={cadastrarTodos} style={styles.button}>
                Cadastrar todos
              </button>
            )}
          </div>
          <br />
          <Link href="/" style={styles.link}>
            ← Voltar para tabela
          </Link>
        </>
      </div>
    </ProtectedRoute>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  modal: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    backgroundColor: "rgba(0,0,0,0.05)",
    gap: 12,
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center" as const,
    marginBottom: 30,
    fontSize: 26,
    color: "#0070f3",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 10,
  },
  label: {
    display: "flex",
    flexDirection: "column" as const,
    fontWeight: "600",
    fontSize: 14,
    color: "#333",
    marginTop: 6,
  },
  select: {
    marginTop: 6,
    padding: "8px 12px",
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #ccc",
    outline: "none",
  },
  input: {
    width: 80,
    marginTop: 6,
    padding: "8px 12px",
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #ccc",
    outline: "none",
  },
  checkbox: {
    width: 18,
    height: 18,
    cursor: "pointer",
  },
  button: {
    marginTop: 10,
    padding: "12px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: 6,
    fontSize: 16,
    fontWeight: "600",
    cursor: "pointer",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "600",
  },
  jogadorLinha: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginTop: 6,
  },
  jogadorNome: {
    flex: 1,
  },
  labelInline: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
};
