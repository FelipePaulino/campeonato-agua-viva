module.exports = {

"[project]/src/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/jogadoresContext.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function Home() {
    const { jogadores, rodadas } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$jogadoresContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useJogadores"])();
    const jogadoresMap = jogadores.reduce((acc, jogador)=>{
        if (!acc[jogador.nome]) {
            acc[jogador.nome] = {
                nome: jogador.nome,
                time: jogador.time,
                notasPorRodada: {}
            };
        }
        acc[jogador.nome].notasPorRodada[jogador.rodada] = jogador.nota;
        return acc;
    }, {});
    const jogadoresAgrupados = Object.values(jogadoresMap);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: styles.title,
                children: "🏆 Campeonato Água Viva"
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                href: "/cadastrar",
                style: styles.button,
                children: "➕ Cadastrar nova rodada"
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.tableWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                    style: styles.table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                            style: styles.thead,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "Nome"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    rodadas.map((rodada)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            style: styles.th,
                                            children: [
                                                "Rodada ",
                                                rodada
                                            ]
                                        }, rodada, true, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                        style: styles.th,
                                        children: "Média"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/index.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                            children: jogadoresAgrupados.map((jogador, i)=>{
                                // Pega todas as notas cadastradas (ignorando ausências)
                                const notas = Object.values(jogador.notasPorRodada);
                                const media = notas.length > 0 ? notas.reduce((acc, val)=>acc + val, 0) / notas.length : 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                    style: i % 2 === 0 ? styles.rowEven : styles.rowOdd,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: jogador.nome
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: jogador.time
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this),
                                        rodadas.map((rodada)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: styles.td,
                                                children: jogador.notasPorRodada[rodada] !== undefined ? jogador.notasPorRodada[rodada].toFixed(2) : ""
                                            }, rodada, false, {
                                                fileName: "[project]/src/pages/index.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...styles.td,
                                                fontWeight: "bold"
                                            },
                                            children: media.toFixed(2)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/index.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/pages/index.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
const styles = {
    container: {
        maxWidth: 1000,
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333"
    },
    title: {
        textAlign: "center",
        marginBottom: 20,
        fontSize: 28,
        color: "#0070f3"
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
        transition: "background-color 0.3s ease"
    },
    tableWrapper: {
        overflowX: "auto"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    },
    thead: {
        backgroundColor: "#0070f3",
        color: "white"
    },
    th: {
        padding: "12px 15px",
        textAlign: "center",
        fontWeight: "600",
        borderBottom: "2px solid #005bb5"
    },
    td: {
        padding: "10px 15px",
        textAlign: "center"
    },
    rowEven: {
        backgroundColor: "#f9f9f9"
    },
    rowOdd: {
        backgroundColor: "#ffffff"
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

//# sourceMappingURL=%5Broot-of-the-server%5D__01995273._.js.map