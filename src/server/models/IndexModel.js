/**
 * Index 数据模型
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Date: 2018-05-28 15:44:50
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-05-28 16:22:49
 */

 /**
  * 首页数据模型
  * @class IndexModel
  */
 export default class IndexModel {
    /**
     * @constructor
     * @param {string} app koa2上下文
     */
    constructor(app) {

    }

    /**
     * 获取首屏数据
     * @return {Promise} 返回异步处理结果的 Promise对象
     * @example
     * return new Promise((resolve, reject) => {});
     * getData()
     */
    getData () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello, PyCoder!")
            }, 1000);
        })
    }
 };
