import Koa from "koa";
import router from 'koa-simple-router';
import InitController from "./controllers";
import config from './config';

const app = new Koa();
InitController.getAllRouters(app, router); // 获取所有路由

app.listen(config.port, () => {
    console.log(`PyCoder web is running, listening on port ${config.port}.`)
});
