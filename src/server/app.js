import Koa from "koa";
import router from 'koa-simple-router';
import InitController from "./controllers";
import config from './config';
import log4js from 'log4js';
import { resolve } from 'path';
import errorHandler from './middleware/errorHandler';
import serve from 'koa-static'; // 静态资源服务
import render from 'koa-swig';
import co from 'co'; // koa-swig 需要配合着 co 模块， koa2

// 日志配置
log4js.configure({
    // 输出源
    appenders: { pycoder: { type: 'file', filename: resolve(__dirname, './logs/pyCoder.log') } },
    // 日志分类
    categories: { default: { appenders: ['pycoder'], level: 'info' } }
});

const app = new Koa();
// 唯一参数日志分类的第二分类名称
//eg：[INFO] server - PyCoder server log listening.
const logger = log4js.getLogger('server');
// 集中处理错误异常中心
errorHandler.error(app, logger);
// 路由集中Hub
InitController.getAllRouters(app, router); // 获取所有路由


// koa-swig 配置
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html'
}));

// 静态资源
app.use(serve(config.staticDir));
app.listen(config.port, () => {
    // logger.info('PyCoder server log listening.')
    console.log(`PyCoder web is running, listening on port ${config.port}.`)
});
