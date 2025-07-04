import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable some rules that often cause deployment warnings but don't affect functionality
      "@next/next/no-img-element": process.env.NODE_ENV === "production" ? "off" : "warn",
      "react/no-unescaped-entities": process.env.NODE_ENV === "production" ? "off" : "warn",
      "@typescript-eslint/no-explicit-any": process.env.NODE_ENV === "production" ? "off" : "warn",
    }
  }
];

export default eslintConfig;
