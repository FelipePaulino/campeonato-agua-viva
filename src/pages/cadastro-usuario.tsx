"use client";
import { useState } from "react";
import { registrarUsuario } from "@/services/authService";
import router from "next/router";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registrarUsuario(email, senha, nome, telefone);
      router.push("/login");
    } catch (error: any) {
      setErro(
        error.code === "auth/email-already-in-use"
          ? "Este email já está em uso."
          : error.code === "auth/weak-password"
          ? "A senha deve ter pelo menos 6 caracteres."
          : error.code === "auth/invalid-email"
          ? "Email inválido."
          : "Ocorreu um erro ao cadastrar."
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Cadastro</h1>
        <p style={styles.subtitle}>Crie sua conta para acessar</p>

        <form onSubmit={handleRegister} style={styles.form}>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} style={styles.input} required />
          <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} style={styles.input} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} style={styles.input} required />
          {erro && <p style={styles.error}>{erro}</p>}
          <button type="submit" style={styles.button}>Cadastrar</button>
        </form>

        <div style={styles.footer}>
          Já tem conta?
          <a href="/login" style={styles.link}>Login</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
  },
  card: {
    width: 400,
    padding: 30,
    borderRadius: 12,
    backgroundColor: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column" as const,
    gap: 15,
  },
  title: { textAlign: "center" as const, fontSize: 28, fontWeight: 700, color: "#0070f3" },
  subtitle: { textAlign: "center" as const, fontSize: 14, color: "#555" },
  form: { display: "flex", flexDirection: "column" as const, gap: 12 },
  input: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 16,
    outline: "none",
    transition: "0.2s",
  },
  button: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    border: "none",
    backgroundColor: "#0070f3",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 16,
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 16,
  },
  googleIcon: { width: 20, height: 20 },
  footer: { marginTop: 15, textAlign: "center" as const, fontSize: 14, color: "#555" },
  link: { color: "#0070f3", fontWeight: 600, marginLeft: 4, textDecoration: "none" },
  error: { color: "red", textAlign: "center" as const },
};

