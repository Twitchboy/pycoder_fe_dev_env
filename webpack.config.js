const argv = require('yargs-parser')(process.argv.slice(2)); //yargs使用的强大选项解析器。
const merge = require('webpack-merge');

console.log(argv);

const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`); // 根据环境，将不同的配置文件引入进来

// 基础配置
let webpackConfig = {
    plugins: []
}

console.log(merge(webpackConfig, _mergeConfig))
