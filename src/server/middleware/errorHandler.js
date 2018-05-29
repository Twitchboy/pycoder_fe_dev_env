// 这里为基础公用的错误处理时，写成类；让每个使用者单独实例化或者继承一个 errorHandler，防止互通
const errorHandler = {
    error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (error) {
                logger.error(error);
                ctx.status = error.status || 500;
                ctx.body = "error page";
            }
        });

        app.use(async (ctx, next) => {
            await next();
            if (ctx.status != 404) return;
            ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://blog.pycoder.club" homePageName="回到我的主页"></script>`;
        })
    }
};

export default errorHandler;
