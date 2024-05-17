import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

const extensions = [".ts", ".tsx"];

export default [
  {
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
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extensions: ['.css'],
        modules: {
            generateScopedName: `[hash:base64:5]`,
        },
        autoModules: false,
      }),
      // terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "./src/index.ts",
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/]
  },
];
