import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const ignores = [
  ".next/**",
  "out/**",
  "dist/**",
  "node_modules/**",
  "next-env.d.ts",
  "tsconfig.tsbuildinfo"
];

const eslintConfig = [
  { ignores },
  ...nextVitals,
  ...nextTypescript
];

export default eslintConfig;
