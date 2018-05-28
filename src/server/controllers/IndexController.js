import IndexModel from '../models/IndexModel';

const IndexController = {
    indexAction () {
        return async (ctx, next) => {
            const indexModel = new IndexModel();
            const result = await indexModel.getData();
            ctx.body = result;
        }
    }
}

export default IndexController;
