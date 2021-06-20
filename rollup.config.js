
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";//node包打包
import babel from "rollup-plugin-babel";

const extensions = ['.js', '.ts'];

export default {
  input: 'src/helloWorld/main.js',
  // input: 'src/ts/index.ts',
  output: {
    file:'src/helloWorld/bundleConfig.js',
    // file: 'src/ts/bundleConfig.js',
    format: 'cjs',//输出格式 amd es6 iife umd cjs
    sourcemap:false  //生成bundle.map.js文件，方便调试
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
  external:['lodash'], //不要将lodash打包，而作为外部依赖
};