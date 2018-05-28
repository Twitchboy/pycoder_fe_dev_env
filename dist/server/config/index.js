'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

let config = {
    port: 4000, // development env
    viewDir: ""
};

// 配置项根据当前的环境产生
const init = () => {
    {
        const prodConfig = {
            port: 4001
        };
        config = _.extend(config, prodConfig);
    }
    return config;
};

var index = init();

module.exports = index;