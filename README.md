# umi project。

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## Add library configuration code
增加打包library库。核心代码在umirc配置文件
```
config.entry('utils')
      .add(path.resolve(__dirname, 'src/utils/index.js'))
      .end()
      .output
      .filename('[name].js')
      .library('Utils')
      .libraryTarget('umd')
      .umdNamedDefine(true);
```
