"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "@/context/SnackbarContext";
import { Times, jogadoresPorTime } from "@/constants/times";
import Link from "next/link";
import { useCartola } from "@/context/cartolaContext";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { useUsuario } from "@/context/userContext";

export default function CampeonatoPage() {
  const [dia, setDia] = useState<number>(1);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [telefone, setTelefone] = useState("");
  const [selecoes, setSelecoes] = useState<string[]>(["", "", "", "", ""]);
  const [filtroTime, setFiltroTime] = useState<Times | "">("");

  const { showSnackbar } = useSnackbar?.() || { showSnackbar: console.log };
  const { cartola } = useCartola();
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const auth = getAuth();
  const usuarioLogado = auth.currentUser;
  const { usuario } = useUsuario();

  useEffect(() => {
    const fetchCadastro = async () => {
      if (!usuarioLogado) return;
      try {
        const res = await axios.get(`${siteUrl}/campeonato.json`);
        const data = res.data;
        if (!data) return;

        const cadastro = Object.entries(data).find(
          (val: any) =>
            val.usuarioUid === usuarioLogado?.uid && val.dia === cartola?.DiaCartolaAtual
        );

        if (cadastro) {
          const [val]: any = cadastro;
          setNomeUsuario(val.usuario);
          setTelefone(val.telefone || "");
          setSelecoes(val.jogadores || ["", "", "", "", ""]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchCadastro();
  }, [usuarioLogado, cartola?.DiaCartolaAtual]);

  useEffect(() => {
    if (cartola?.DiaCartolaAtual) {
      setDia(cartola.DiaCartolaAtual);
    }
  }, [cartola]);

  const opcoesJogadores = filtroTime
    ? jogadoresPorTime[filtroTime]
    : Object.values(jogadoresPorTime).flat();

  const opcoesFiltradas = opcoesJogadores.filter((j) => !selecoes.includes(j));

  const handleSelectChange = (index: number, value: string) => {
    const novasSelecoes = [...selecoes];
    novasSelecoes[index] = value;
    setSelecoes(novasSelecoes);
  };

const handleSubmit = async () => {
  if (!usuarioLogado) return showSnackbar("Você precisa estar logado!", "error");

  // Pega dados do contexto ou fallback para o estado local
  const nomeFinal = usuario?.nome || nomeUsuario;
  const telefoneFinal = usuario?.telefone || telefone;

  if (!nomeFinal) return showSnackbar("Digite seu nome!", "error");
  if (!telefoneFinal) return showSnackbar("Digite seu telefone!", "error");
  if (selecoes.some((s) => s === "")) return showSnackbar("Selecione 5 jogadores!", "error");

  try {
    const res = await axios.get(`${siteUrl}/campeonato.json`);
    const data = res.data;
    let cadastroKey: string | null = null;

    if (data) {
      cadastroKey = Object.keys(data).find(
        (key) =>
          data[key].usuarioUid === usuarioLogado.uid &&
          data[key].dia === cartola?.DiaCartolaAtual
      ) || null;
    }

    if (cadastroKey) {
      await axios.patch(`${siteUrl}/campeonato/${cadastroKey}.json`, {
        usuario: nomeFinal,
        telefone: telefoneFinal,
        jogadores: selecoes,
      });
      showSnackbar("Cadastro atualizado com sucesso!", "success");
    } else {
      await axios.post(`${siteUrl}/campeonato.json`, {
        dia: cartola?.DiaCartolaAtual,
        usuario: nomeFinal,
        usuarioUid: usuarioLogado.uid,
        telefone: telefoneFinal,
        jogadores: selecoes,
      });
      showSnackbar("Cadastro realizado com sucesso!", "success");
    }

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
          value={usuario?.nome ? usuario.nome : nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label>Telefone:</label>
        <input
          type="text"
          value={usuario?.telefone ? usuario.telefone : telefone}
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
              .concat(valor ? [valor] : [])
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
