module.exports = {

"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/src/pages/constantes/times.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Times": ()=>Times,
    "jogadoresPorTime": ()=>jogadoresPorTime
});
var Times = /*#__PURE__*/ function(Times) {
    Times["PSG"] = "PSG";
    Times["REAL_MADRID"] = "Real Madrid";
    Times["ARSENAL"] = "Arsenal";
    Times["CITY"] = "Manchester City";
    Times["BARCELONA"] = "Barcelona";
    return Times;
}({});
const jogadoresPorTime = {
    ["PSG"]: [
        "Maurício Edson de Souza",
        "Anderson Nascimento Santos",
        "Douglas F Santos",
        "Ian Henrique",
        "Diogo Ediardo",
        "Gustavo de jesus",
        "Pablo Oliveira",
        "Renatinho jeremias",
        "Leonardo da Silva",
        "Matheus Pastorzão"
    ],
    ["Real Madrid"]: [
        "Felipe Paulino",
        "George Silva",
        "Vinicius Augusto",
        "Silas Santos",
        "Gabriel Santos",
        "Carlos Eduardo",
        "Marcilio Souza",
        "Matheus Assis",
        "Matheus colantuano",
        "Kewin"
    ],
    ["Arsenal"]: [
        "Silas Lira",
        "Dener Vieira de Souza",
        "Tiago Santos Nogueira",
        "André Aparecido P de Souza",
        "Gustavo Silva",
        "Arthur Costa Ribeiro ",
        "Eder Loredo",
        "Otávio Neri",
        "Charlyes",
        "Leonardo Barbosa"
    ],
    ["Manchester City"]: [
        "Luiz Carlos da Silva Francisco",
        "William Ferreira",
        "Douglas Santos",
        "Alexander lino",
        "Nathan Henrique",
        "Rafael Bento Ferreira",
        "Rodrigada",
        "Mateus Jackson",
        "Vini Franca",
        "Danilo da Silva Rocha"
    ],
    ["Barcelona"]: [
        "Gabriel Santos Fonseca",
        "Paulo Victor da Silva",
        "Diego Evangelista Gonçalves",
        "Victor Prudencio",
        "Victor Henrique",
        "Emanuel Medeiros",
        "Yan haikimi",
        "João Vitor Fernandes de Souza",
        "Gilberlanio",
        "Carlos Eduardo Gonçalves da Silva"
    ]
};
}),
"[project]/src/pages/cadastrar.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>Cadastrar
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/jogadoresContext.tsx [ssr] (ecmascript)"); // ajuste o caminho
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$constantes$2f$times$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/constantes/times.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const STORAGE_KEY = "autorizadoParaCadastro";
function Cadastrar() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [nome, setNome] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [rodada, setRodada] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [nota, setNota] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [notaStr, setNotaStr] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("0");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { reloadJogadores } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useJogadores"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
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
    }, [
        router
    ]);
    async function cadastrarJogador() {
        if (!nome || !time) {
            alert("Preencha o nome e o time!");
            return;
        }
        const novoCadastro = {
            nome,
            time,
            rodada,
            nota
        };
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].post("https://sistema-fut-ibav-default-rtdb.firebaseio.com/jogadores.json", novoCadastro);
            alert("Cadastro realizado com sucesso!");
            await reloadJogadores();
            router.push("/");
        } catch (error) {
            console.error("Erro ao cadastrar jogador:", error);
            alert("Erro ao cadastrar, tente novamente.");
        }
    }
    const nomes = time ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$constantes$2f$times$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["jogadoresPorTime"][time] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: styles.title,
                children: "➕ Cadastrar nova rodada de jogador"
            }, void 0, false, {
                fileName: "[project]/src/pages/cadastrar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        style: styles.label,
                        children: [
                            "Time:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                value: time,
                                onChange: (e)=>{
                                    setTime(e.target.value);
                                    setNome(""); // reset nome ao mudar time
                                },
                                style: styles.select,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "-- Selecione o time --"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/cadastrar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$constantes$2f$times$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Times"]).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                            value: t,
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/src/pages/cadastrar.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/cadastrar.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/cadastrar.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        style: styles.label,
                        children: [
                            "Nome do jogador:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                value: nome,
                                onChange: (e)=>setNome(e.target.value),
                                disabled: !time,
                                style: styles.select,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "-- Selecione o jogador --"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/cadastrar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    nomes.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                            value: n,
                                            children: n
                                        }, n, false, {
                                            fileName: "[project]/src/pages/cadastrar.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/cadastrar.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/cadastrar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        style: styles.label,
                        children: [
                            "Rodada:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: rodada,
                                min: 1,
                                onChange: (e)=>setRodada(Number(e.target.value)),
                                style: styles.input
                            }, void 0, false, {
                                fileName: "[project]/src/pages/cadastrar.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/cadastrar.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        style: styles.label,
                        children: [
                            "Nota:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: notaStr,
                                min: -50,
                                max: 50,
                                step: 0.1,
                                onChange: (e)=>setNotaStr(e.target.value),
                                style: styles.input
                            }, void 0, false, {
                                fileName: "[project]/src/pages/cadastrar.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/cadastrar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: cadastrarJogador,
                        style: styles.button,
                        children: "Cadastrar"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/cadastrar.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/cadastrar.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/pages/cadastrar.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "/",
                style: styles.link,
                children: "← Voltar para tabela"
            }, void 0, false, {
                fileName: "[project]/src/pages/cadastrar.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/cadastrar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
const styles = {
    container: {
        maxWidth: 400,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333"
    },
    title: {
        textAlign: "center",
        marginBottom: 30,
        fontSize: 26,
        color: "#0070f3"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 15
    },
    label: {
        display: "flex",
        flexDirection: "column",
        fontWeight: "600",
        fontSize: 14,
        color: "#555"
    },
    select: {
        marginTop: 6,
        padding: "8px 12px",
        fontSize: 16,
        borderRadius: 6,
        border: "1px solid #ccc",
        outline: "none",
        transition: "border-color 0.3s"
    },
    input: {
        marginTop: 6,
        padding: "8px 12px",
        fontSize: 16,
        borderRadius: 6,
        border: "1px solid #ccc",
        outline: "none",
        transition: "border-color 0.3s"
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
        transition: "background-color 0.3s"
    },
    link: {
        color: "#0070f3",
        textDecoration: "none",
        fontWeight: "600"
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7d190de5._.js.map