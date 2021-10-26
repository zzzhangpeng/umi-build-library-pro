import { defineConfig } from 'umi';

const path = require('path');
export default defineConfig({
  history: {
    type: 'hash'
  },
  // exportStatic: {  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack: function(config) {
    // 打包 library 核心代码
    config.entry('utils')
      .add(path.resolve(__dirname, 'src/utils/index.js'))
      .end()
      .output
      .filename('[name].js')
      .library('Utils')
      .libraryTarget('umd')
      .umdNamedDefine(true);
  },
});
