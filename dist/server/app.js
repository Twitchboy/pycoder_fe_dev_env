"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _controllers = require("./controllers");

var _controllers2 = _interopRequireDefault(_controllers);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
_controllers2.default.getAllRouters(app, _koaSimpleRouter2.default); // 获取所有路由

app.listen(_config2.default.port, () => {
    console.log(`PyCoder web is running, listening on port ${_config2.default.port}.`);
});