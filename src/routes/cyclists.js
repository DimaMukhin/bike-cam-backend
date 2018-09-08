const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx => {
    ctx.body = 'ok';
}));

module.exports = router.routes();