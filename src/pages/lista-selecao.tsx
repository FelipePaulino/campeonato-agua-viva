"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "@/context/SnackbarContext";
import { Times, jogadoresPorTime } from "@/constants/times";
import Link from "next/link";
import { useCartola } from "@/context/cartolaContext";
import { useRouter } from "next/router";

export default function CampeonatoPage() {
  const [dia, setDia] = useState<number>(1);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [telefone, setTelefone] = useState(""); // novo estado para telefone
  const [selecoes, setSelecoes] = useState<string[]>(["", "", "", "", ""]);
  const [filtroTime, setFiltroTime] = useState<Times | "">("");

  const { showSnackbar } = useSnackbar?.() || { showSnackbar: console.log };
  const { cartola } = useCartola();
  const router = useRouter();

  // Atualiza o dia com o dia atual do cartola
  useEffect(() => {
    if (cartola?.DiaCartolaAtual) {
      setDia(cartola.DiaCartolaAtual);
    }
  }, [cartola]);

  // Pega jogadores filtrando por time (se selecionado)
  const opcoesJogadores = filtroTime
    ? jogadoresPorTime[filtroTime]
    : Object.values(jogadoresPorTime).flat();

  // Remove jogadores já selecionados das opções
  const opcoesFiltradas = opcoesJogadores.filter((j) => !selecoes.includes(j));

  const handleSelectChange = (index: number, value: string) => {
    const novasSelecoes = [...selecoes];
    novasSelecoes[index] = value;
    setSelecoes(novasSelecoes);
  };

  const handleSubmit = async () => {
    if (!nomeUsuario) {
      showSnackbar("Digite seu nome!", "error");
      return;
    }
       if (!telefone) {
      showSnackbar("Digite seu telefone!", "error");
      return;
    }
    if (selecoes.some((s) => s === "")) {
      showSnackbar("Selecione 5 jogadores!", "error");
      return;
    }

    try {
      await axios.post(
        "https://sistema-fut-ibav-default-rtdb.firebaseio.com/campeonato.json",
        {
          dia,
          usuario: nomeUsuario,
          telefone, // envia telefone
          jogadores: selecoes,
        }
      );
      showSnackbar("Seleção enviada com sucesso!", "success");
      setNomeUsuario("");
      setTelefone(""); // limpa o telefone
      setSelecoes(["", "", "", "", ""]);
      setFiltroTime("");
      router.push("/");
    } catch (err) {
      console.error(err);
      showSnackbar("Erro ao enviar seleção.", "error");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Campeonato</h1>

      <div style={styles.field}>
        <label>Dia atual:</label>
        <input
          type="number"
          value={dia}
          readOnly
          style={{
            ...styles.select,
            backgroundColor: "#f0f0f0",
            cursor: "not-allowed",
          }}
        />
      </div>

      <div style={styles.field}>
        <label>Seu Nome:</label>
        <input
          type="text"
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label>Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          style={styles.input}
          placeholder="(99) 99999-9999"
        />
      </div>

      <div style={styles.field}>
        <label>Filtrar por Time (opcional):</label>
        <select
          value={filtroTime}
          onChange={(e) => setFiltroTime(e.target.value as Times)}
          style={styles.select}
        >
          <option value="">Todos os times</option>
          {Object.values(Times).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {selecoes.map((valor, idx) => (
        <div key={idx} style={styles.field}>
          <label>
            Jogador {idx + 1} {idx === 0 ? "(Goleiro)" : ""}:
          </label>
          <select
            value={valor}
            onChange={(e) => handleSelectChange(idx, e.target.value)}
            style={styles.select}
          >
            <option value="">Selecione</option>
            {opcoesFiltradas
              .concat(valor ? [valor] : []) // mantém o valor selecionado mesmo se filtrado
              .map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
          </select>
        </div>
      ))}

      <div style={styles.buttons}>
        <Link href="/" style={styles.link}>
          ← Voltar para tabela
        </Link>
        <button onClick={handleSubmit} style={styles.button}>
          Enviar Seleção
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 500,
    margin: "40px auto",
    padding: 20,
    fontFamily: "'Segoe UI', sans-serif",
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  field: {
    marginBottom: 16,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  select: {
    padding: 8,
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 6,
    border: "none",
    backgroundColor: "#0070f3",
    color: "#fff",
    cursor: "pointer",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: "#0070f3",
    fontWeight: 600,
  },
};
