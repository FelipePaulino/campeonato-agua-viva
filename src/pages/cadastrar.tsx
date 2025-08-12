import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useJogadores } from "../context/jogadoresContext"; // ajuste o caminho
import { jogadoresPorTime, Times } from "../constantes/times";
import Link from "next/link";

const STORAGE_KEY = "autorizadoParaCadastro";

export default function Cadastrar() {
  const [time, setTime] = useState<Times | "">("");
  const [nome, setNome] = useState("");
  const [nota, setNota] = useState<string>("0");
  const [rodada, setRodada] = useState<number>(1);

  const router = useRouter();
  const { reloadJogadores } = useJogadores();

  useEffect(() => {
    const autorizado = localStorage.getItem(STORAGE_KEY);
    if (autorizado !== "true") {
      const senha = prompt("Digite a senha para acessar esta página:");
      if (senha !== "1234") {
        alert("Senha incorreta! Voltando para a página inicial.");
        router.push("/");
      } else {
        localStorage.setItem(STORAGE_KEY, "true");
      }
    }
  }, [router]);

  async function cadastrarJogador() {
    if (!nome || !time) {
      alert("Preencha o nome e o time!");
      return;
    }

    const notaNumber = parseFloat(nota.replace(",", "."));

    const novoCadastro = {
      nome,
      time,
      rodada,
      nota: isNaN(notaNumber) ? 0 : notaNumber,
    };

    try {
      await axios.post(
        "https://sistema-fut-ibav-default-rtdb.firebaseio.com/jogadores.json",
        novoCadastro
      );
      alert("Cadastro realizado com sucesso!");

      await reloadJogadores();
      router.push("/");
    } catch (error) {
      console.error("Erro ao cadastrar jogador:", error);
      alert("Erro ao cadastrar, tente novamente.");
    }
  }

  const nomes = time ? jogadoresPorTime[time] : [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>➕ Cadastrar nova rodada de jogador</h1>

      <div style={styles.form}>
        <label style={styles.label}>
          Time:
          <select
            value={time}
            onChange={(e) => {
              setTime(e.target.value as Times);
              setNome(""); // reset nome ao mudar time
            }}
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
          Nome do jogador:
          <select
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={!time}
            style={styles.select}
          >
            <option value="">-- Selecione o jogador --</option>
            {nomes.map((n) => (
              <option key={n} value={n}>
                {n}
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

        <label style={styles.label}>
          Nota:
          <input
            type="number"
            value={nota}
            min={-50}
            max={50}
            step={0.1}
            onChange={(e) => setNota(e.target.value)}
            style={styles.input}
          />
        </label>

        <button onClick={cadastrarJogador} style={styles.button}>
          Cadastrar
        </button>
      </div>

      <br />
      <Link href="/" style={styles.link}>
        ← Voltar para tabela
      </Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
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
    gap: 15,
  },
  label: {
    display: "flex",
    flexDirection: "column" as const,
    fontWeight: "600",
    fontSize: 14,
    color: "#555",
  },
  select: {
    marginTop: 6,
    padding: "8px 12px",
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s",
  },
  input: {
    marginTop: 6,
    padding: "8px 12px",
    fontSize: 16,
    borderRadius: 6,
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s",
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
    transition: "background-color 0.3s",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "600",
  },
};
