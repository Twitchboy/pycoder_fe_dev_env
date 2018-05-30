const argv = require('yargs-parser')(process.argv.slice(2)); //yargs使用的强大选项解析器。
const merge = require('webpack-merge'); // 字面意思，根据不同环境的配置 merge 过来
const glob = require('glob'); //匹配文件

console.log("argv:", argv);

const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`); // 根据环境，将不同的配置文件引入进来
const files = glob.sync('./src/webApp/views/**/*.entry.js');

console.log('files:', files);

let _entry = {};
for (let item of files) {
    const reg = /.+\/([a-zA-Z]+)(\.entry\.js)$/g; // 匹配符合的 entry 文件，entry 可能是多个，多路口
    if (reg.test(item)) {
        const entryKey = RegExp.$1; // 提取
        console.log("RegExp", entryKey)
        _entry[entryKey] = item;
    }
}

console.log(_entry);
// 基础配置
let webpackConfig = {
    entry: _entry
}

module.exports = merge(webpackConfig, _mergeConfig);
