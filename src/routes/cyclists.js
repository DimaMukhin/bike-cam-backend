const Router = require('koa-router');
const { getAllCyclists, getCyclistById } = require('../services/redartsClient');

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = await getAllCyclists();
});

router.get('/:id', async (ctx) => {
    const cyclistId = ctx.params.id;
    ctx.body = await getCyclistById(cyclistId);
});

module.exports = router.routes();