# 项目架构

架构模式采用BFF，BFF（Backends For Frontends）服务于前端的后端。也就是服务器设计 API 时会考虑前端的使用，并在服务端直接进行业务逻辑的处理。

早期在设计系统 API 的时候，只是单纯地为前端（Web、Android、iOS 等等）提供一个模型（Model）的 JSON 序列化，并不会具体考虑前端的需求。如下是一个常规的 RESTful API，从设计上来说，它满足 RESTful API 的要求，但是并适合于前端使用。

在这种情况下，我们需要进行一些处理，如对文字的截断等等。而使用 BFF 则意味着，它会多出一层业务处理及转发层。

[BFF详细](https://www.phodal.com/blog/architecture-101-bff-for-legacy-system-migrate/)

## 项目目录结构

```tree

.
├── README.md
├── dist
├── docs
├── gulpfile.js
├── package-lock.json
├── package.json
└── src
│   └── server
│       ├── app.js
│        ├── assets
│        ├── components
│        ├── config
│        │   └── index.js
│       ├── controllers
│       │   ├── IndexController.js
│       │   └── index.js
│       ├── middleware
│       ├── models
│       ├── tools
│       └── views
│   └── webApp
│       ├── views
│       │   ├── common
│       │   ├── index
│       │   └── index.entry.js
│       └── widgets
│           └── pyHeader
└── webpack.config.js
```

## Server 端环境搭建使用相关插件

* [koa](https://www.npmjs.com/package/koa) 基于 Node.js 的 Web开发框架
* [koa-simple-router](https://www.npmjs.com/package/koa-simple-router) 用于koa 2.x的简单而快速的路由器
* [gulp](https://www.gulpjs.com.cn/) 自动化构建工具
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) JavaScript 编译器
* [gulp-rollup](https://www.npmjs.com/package/gulp-rollup) JavaScript 模块打包器, 在这里只是做了 Tree Shaking 清除编译后，config配置文件多余的代码
* [rollup-plugin-replace](https://www.npmjs.com/package/rollup-plugin-replace) 替换文件中的字符串,配合 gulp-rollup 使用
* [gulp-sequence](https://www.npmjs.com/package/gulp-sequence) gulp task 是异步执行，sequence 让任务按照有序的队列进行
* [del](https://www.npmjs.com/package/del) 删除文件和文件夹
* [babel-core](https://www.npmjs.com/package/babel-core)
* [babel-plugin-transform-es2015-modules-commonjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs) ES Module => commonjs
* [supervisor](https://www.npmjs.com/package/supervisor) node server
* [jsdoc](https://www.npmjs.com/package/jsdoc) JavaScript 的API文档生成器。
* [cross-env](https://www.npmjs.com/package/cross-env) 运行跨平台设置和使用环境变量的脚本
* [lodash](https://www.npmjs.com/package/lodash) JavaScript 实用工具库

> Node 代码不需要压缩，线上环境出现问题，可以更方便维护
