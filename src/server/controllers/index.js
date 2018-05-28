import IndexController from './IndexController';

const InitController = {
    getAllRouters (app, router) {
        app.use(router(_ => {
            _.get('/', IndexController.indexAction())
        }));
    }
}

export default InitController;
