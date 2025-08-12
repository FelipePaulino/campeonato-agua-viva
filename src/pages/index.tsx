import { useJogadores } from "../context/jogadoresContext";

export default function Home() {
  const { jogadores, rodadas } = useJogadores();

  const jogadoresMap = jogadores.reduce<
    Record<
      string,
      {
        nome: string;
        time: string;
        notasPorRodada: Record<number, number>;
      }
    >
  >((acc, jogador) => {
    if (!acc[jogador.nome]) {
      acc[jogador.nome] = {
        nome: jogador.nome,
        time: jogador.time,
        notasPorRodada: {},
      };
    }
    acc[jogador.nome].notasPorRodada[jogador.rodada] = jogador.nota;
    return acc;
  }, {});

  const jogadoresAgrupados = Object.values(jogadoresMap);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏆 Campeonato Água Viva</h1>

      <a href="/cadastrar" style={styles.button}>
        ➕ Cadastrar nova rodada
      </a>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th}>Nome</th>
              <th style={styles.th}>Time</th>
              {rodadas.map((rodada) => (
                <th key={rodada} style={styles.th}>
                  Rodada {rodada}
                </th>
              ))}
              <th style={styles.th}>Média</th>
            </tr>
          </thead>
          <tbody>
            {jogadoresAgrupados.map((jogador, i) => {
              // Pega todas as notas cadastradas (ignorando ausências)
              const notas = Object.values(jogador.notasPorRodada);

              const media =
                notas.length > 0
                  ? notas.reduce((acc, val) => acc + val, 0) / notas.length
                  : 0;

              return (
                <tr key={i} style={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td style={styles.td}>{jogador.nome}</td>
                  <td style={styles.td}>{jogador.time}</td>
                  {rodadas.map((rodada) => (
                    <td key={rodada} style={styles.td}>
                      {jogador.notasPorRodada[rodada] !== undefined
                        ? jogador.notasPorRodada[rodada].toFixed(2)
                        : ""}
                    </td>
                  ))}
                  <td style={{ ...styles.td, fontWeight: "bold" }}>
                    {media.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 1000,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  title: {
    textAlign: "center" as const,
    marginBottom: 20,
    fontSize: 28,
    color: "#0070f3",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#0070f3",
    color: "white",
    padding: "10px 18px",
    borderRadius: 6,
    textDecoration: "none",
    marginBottom: 20,
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
  tableWrapper: {
    overflowX: "auto" as const,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  thead: {
    backgroundColor: "#0070f3",
    color: "white",
  },
  th: {
    padding: "12px 15px",
    textAlign: "center" as const,
    fontWeight: "600",
    borderBottom: "2px solid #005bb5",
  },
  td: {
    padding: "10px 15px",
    textAlign: "center" as const,
  },
  rowEven: {
    backgroundColor: "#f9f9f9",
  },
  rowOdd: {
    backgroundColor: "#ffffff",
  },
};
