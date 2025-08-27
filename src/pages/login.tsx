"use client";
import { useState } from "react";
import { loginUsuario, loginComGoogle, registrarUsuario } from "@/services/authService";
import router from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import GoogleButton from "@/components/GoogleLoginButton";
import { useAuth } from "@/context/AuthContext";
import { ADMINS } from "@/constants/admins";

export default function AuthPage() {
    const [modo, setModo] = useState<"login" | "cadastro">("login");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const { login } = useAuth();

    const resetCampos = () => {
        setNome("");
        setTelefone("");
        setEmail("");
        setSenha("");
        setErro("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");

        try {
            if (modo === "login") {
                await loginUsuario(email, senha);

                // aqui você precisaria verificar se o usuário é admin
                // se tiver só front, pode criar uma lista de emails admins
                const isAdmin = ADMINS.includes(email);


                login(email, isAdmin); // atualiza contexto
                router.push("/");
            } else {
                await registrarUsuario(email, senha, nome, telefone);

                const isAdmin = ADMINS.includes(email);

                login(email, isAdmin);
                router.push("/");
            }
        } catch (error: any) {
            if (modo === "login") {
                setErro(
                    error.code === "auth/user-not-found"
                        ? "Usuário não encontrado."
                        : error.code === "auth/wrong-password"
                            ? "Senha incorreta."
                            : error.code === "auth/invalid-email"
                                ? "Email inválido."
                                : "Erro ao fazer login."
                );
            } else {
                setErro(
                    error.code === "auth/email-already-in-use"
                        ? "Este email já está em uso."
                        : error.code === "auth/weak-password"
                            ? "A senha deve ter pelo menos 6 caracteres."
                            : error.code === "auth/invalid-email"
                                ? "Email inválido."
                                : "Erro ao cadastrar."
                );
            }
        }
    };


    const handleLoginGoogle = async () => {
        try {
            const user = await loginComGoogle(); // se seu loginComGoogle retorna info do usuário      
            const isAdmin = ADMINS.includes(user.email!);

            login(user.email!, isAdmin);
            router.push("/");
        } catch (error) {
            console.error("Erro no login Google:", error);
            setErro("Erro ao entrar com Google");
        }
    };
    return (
        <div style={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4 }}
                style={styles.card}
            >
                <h1 style={styles.title}>{modo === "login" ? "Login" : "Cadastro"}</h1>
                <p style={styles.subtitle}>
                    {modo === "login"
                        ? "Digite seus dados para acessar"
                        : "Crie sua conta para acessar o sistema"}
                </p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <AnimatePresence mode="wait">
                        {modo === "cadastro" && (
                            <motion.div
                                key="cadastro-campos"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ display: "flex", flexDirection: "column", gap: 12 }}
                            >
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    style={styles.input}
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Telefone"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    style={styles.input}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        style={styles.input}
                        required
                    />

                    {erro && <p style={styles.error}>{erro}</p>}

                    <button type="submit" style={styles.button}>
                        {modo === "login" ? "Entrar" : "Cadastrar"}
                    </button>
                </form>

                <GoogleButton
                    text={modo === "login" ? "Sign in with Google" : "Sign up with Google"}
                    onClick={handleLoginGoogle}
                />

                <div style={styles.footer}>
                    {modo === "login" ? "Não tem conta?" : "Já tem conta?"}
                    <span
                        onClick={() => {
                            setModo(modo === "login" ? "cadastro" : "login");
                            resetCampos();
                        }}
                        style={styles.link}
                    >
                        {modo === "login" ? "Cadastre-se" : "Login"}
                    </span>
                </div>
            </motion.div>
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
    footer: {
        marginTop: 15,
        textAlign: "center" as const,
        fontSize: 14,
        color: "#555",
    },
    link: {
        color: "#0070f3",
        fontWeight: 600,
        marginLeft: 4,
        textDecoration: "underline",
        cursor: "pointer",
    },
    error: { color: "red", textAlign: "center" as const },
};
