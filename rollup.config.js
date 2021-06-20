export default {
  input: 'src/helloWorld/main.js',
  output: {
    file: 'src/helloWorld/bundleConfig.js',
    format: 'cjs',//输出格式 amd es6 iife umd cjs
    sourcemap:false  //生成bundle.map.js文件，方便调试
  },
  external:['lodash'] //不要将此lodash打包，而作为外部依赖
};