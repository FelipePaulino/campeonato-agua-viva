import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Presets do Next (trazem plugins/react/react-hooks/@typescript-eslint via compat)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Suas regras de override
  {
    rules: {
      // Desliga o aviso de dependências do useEffect
      "react-hooks/exhaustive-deps": "off",

      // Libera o uso de `any`
      "@typescript-eslint/no-explicit-any": "off",

      // (opcionais) menos verbosidade com TS/React
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/display-name": "off",
    },
  },
];

export default eslintConfig;
