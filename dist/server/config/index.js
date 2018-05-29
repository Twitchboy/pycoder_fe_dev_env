'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
    port: 4000, // development env
    viewDir: ""
};

// 配置项根据当前的环境产生
const init = () => {
    if (process.env.NODE_ENV == 'development') {
        const localConfig = {};
        config = _lodash2.default.extend(config, localConfig); // 添加、替换自己的配置（继承）
    }

    if (process.env.NODE_ENV == 'production') {
        const prodConfig = {
            port: 4001
        };
        config = _lodash2.default.extend(config, prodConfig);
    }
    return config;
};

exports.default = init();