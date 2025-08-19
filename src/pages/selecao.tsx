"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useJogadores } from "../context/jogadoresContext";
import { useCartola } from "../context/cartolaContext";
import Link from "next/link";
import { jogadoresPorTime } from "../constants/times";

interface CampeonatoEntry {
  dia: number;
  usuario: string;
  telefone: string;
  jogadores: string[];
}

export default function CampeonatoListPage() {
  const { jogadores } = useJogadores();
  const { cartola } = useCartola();
  const [selecoes, setSelecoes] = useState<CampeonatoEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [mediasPorJogadorPorRodada, setMediasPorJogadorPorRodada] = useState<
    Record<string, Record<number, number>>
  >({});

  const rodadasPorTimePorDia: Record<number, Record<string, number[]>> = {
    1: {
      PSG: [1, 2],
      REAL_MADRID: [1],
      ARSENAL: [1],
      MANCHESTER_CITY: [1],
      BARCELONA: [1],
    },
    2: {
      PSG: [3],
      REAL_MADRID: [2, 3],
      ARSENAL: [2],
      MANCHESTER_CITY: [2],
      BARCELONA: [2],
    },
    3: {
      PSG: [4],
      REAL_MADRID: [4],
      ARSENAL: [3, 4],
      MANCHESTER_CITY: [3, 4],
      BARCELONA: [3, 4],
    },
  };

  const normalizaTimeKey = (t: string) => t.replace(/\s+/g, "_").toUpperCase();

  useEffect(() => {
    const map: Record<string, Record<number, number>> = {};
    jogadores.forEach((j) => {
      const nome = j.nome;
      if (!map[nome]) map[nome] = {};
      map[nome][j.rodada] = j.nota;
    });
    setMediasPorJogadorPorRodada(map);
  }, [jogadores]);

  useEffect(() => {
    const fetchSelecoes = async () => {
      try {
        const res = await axios.get(
          "https://sistema-fut-ibav-default-rtdb.firebaseio.com/campeonato.json"
        );
        const data = res.data;

        const lista: CampeonatoEntry[] = data
          ? Object.keys(data).map((key) => ({
              dia: data[key].dia ?? 1,
              usuario: data[key].usuario,
              telefone: data[key].telefone ?? "",
              jogadores: data[key].jogadores ?? [],
            }))
          : [];

        setSelecoes(lista);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSelecoes();
  }, []);

  if (loading) return <p>Carregando...</p>;

  const selecoesDoDia = selecoes.filter(
    (s) => s.dia === cartola?.DiaCartolaAtual
  );

  const getTimeKeyDoJogador = (nome: string): string => {
    for (const [timeNome, listaJogadores] of Object.entries(jogadoresPorTime)) {
      if (listaJogadores.includes(nome)) {
        return normalizaTimeKey(timeNome); // ex: "Real Madrid" -> "REAL_MADRID"
      }
    }
    return "DESCONHECIDO";
  };

  const maiorNotaDoDia = (nome: string, dia: number) => {
    const time = getTimeKeyDoJogador(nome);
    const rodadas = rodadasPorTimePorDia[dia]?.[time] || [];
    const notas = rodadas
      .map((r) => mediasPorJogadorPorRodada[nome]?.[r])
      .filter((n) => n !== undefined && n !== null);
    return notas.length ? Math.max(...notas) : null;
  };

  const selecoesOrdenadas = selecoesDoDia.slice().sort((a, b) => {
    const totalA = a.jogadores.reduce((sum, nome) => {
      const nota = maiorNotaDoDia(nome, a.dia);
      return sum + (nota ?? 0);
    }, 0);
    const totalB = b.jogadores.reduce((sum, nome) => {
      const nota = maiorNotaDoDia(nome, b.dia);
      return sum + (nota ?? 0);
    }, 0);
    return totalB - totalA;
  });

  return (
    <div style={styles.container}>
      <Link href="/" style={styles.link}>
        ← Voltar para tabela
      </Link>
      <h1>Campeonato - Seleções (Dia {cartola?.DiaCartolaAtual})</h1>
      {selecoesOrdenadas.length === 0 && (
        <p>Nenhuma seleção cadastrada para o dia {cartola?.DiaCartolaAtual}.</p>
      )}

      {selecoesOrdenadas.map((entry, idx) => {
        const total = entry.jogadores.reduce((sum, nome) => {
          const nota = maiorNotaDoDia(nome, entry.dia);
          return sum + (nota ?? 0);
        }, 0);

        return (
          <div key={idx} style={styles.card}>
            <h3 style={styles.usuario}>{entry.usuario}</h3>
            <p style={styles.telefone}>Telefone: {entry.telefone}</p>
            <ul style={styles.jogadoresList}>
              {entry.jogadores.map((j, i) => {
                const timeKey = getTimeKeyDoJogador(j);
                const timeLabel =
                  timeKey !== "DESCONHECIDO" ? timeKey.replace(/_/g, " ") : "";
                const nota = maiorNotaDoDia(j, entry.dia);
                return (
                  <li key={i}>
                    {j}
                    {timeLabel ? ` (${timeLabel})` : ""}{" "}
                    {nota !== null ? `- Nota do dia: ${nota.toFixed(2)}` : ""}
                  </li>
                );
              })}
            </ul>
            <p>
              <strong>Total da rodada:</strong> {total.toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 700,
    margin: "40px auto",
    padding: 20,
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  usuario: {
    marginBottom: 4,
    color: "#0070f3",
    fontWeight: "bold",
  },
  telefone: {
    marginBottom: 8,
    color: "#333",
    fontStyle: "italic",
  },
  jogadoresList: {
    listStyle: "none",
    paddingLeft: 0,
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "600",
  },
};
