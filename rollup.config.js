import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./src/entrypoint.ts",
  output: {
    dir: "dist/",
    format: "es"
  },
  plugins: [
    nodeResolve({}),
    commonjs({
      include: "node_modules/**" // Default: undefined
    }),
    typescript(),
    production && terser()
  ]
};
