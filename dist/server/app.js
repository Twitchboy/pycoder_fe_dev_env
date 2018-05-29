"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _controllers = require("./controllers");

var _controllers2 = _interopRequireDefault(_controllers);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _path = require("path");

var _errorHandler = require("./middleware/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 日志配置
_log4js2.default.configure({
    // 输出源
    appenders: { pycoder: { type: 'file', filename: (0, _path.resolve)(__dirname, './logs/pyCoder.log') } },
    // 日志分类
    categories: { default: { appenders: ['pycoder'], level: 'info' } }
});

const app = new _koa2.default();
// 唯一参数日志分类的第二分类名称
//eg：[INFO] server - PyCoder server log listening.
const logger = _log4js2.default.getLogger('server');
// 集中处理错误异常中心
_errorHandler2.default.error(app, logger);
// 路由集中处理Hub
_controllers2.default.getAllRouters(app, _koaSimpleRouter2.default); // 获取所有路由

app.listen(_config2.default.port, () => {
    // logger.info('PyCoder server log listening.')
    console.log(`PyCoder web is running, listening on port ${_config2.default.port}.`);
});