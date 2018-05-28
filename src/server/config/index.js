import _ from 'lodash';

let config = {
    port: 4000, // development env
    viewDir: ""
};

// 配置项根据当前的环境产生
const init = () => {
    if (process.env.NODE_ENV == 'development') {
        const localConfig = {};
        config = _.extend(config, localConfig); // 添加、替换自己的配置（继承）
    }

    if (process.env.NODE_ENV == 'production') {
        const prodConfig = {
            port: 4001
        };
        config = _.extend(config, prodConfig);
    }
    return config;
}

export default init();
