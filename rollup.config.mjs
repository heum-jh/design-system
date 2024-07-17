import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import tailwindcss from "tailwindcss";

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

const extensions = [".js", ".jsx", ".ts", ".tsx", ".css"];

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({ include: "/node_modules/**" }),
    typescript(),
    postcss({
      minimize: true,
      modules: true,
      extract: true,
      plugins: [tailwindcss, autoprefixer],
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
