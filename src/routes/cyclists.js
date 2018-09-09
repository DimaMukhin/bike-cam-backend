const Router = require('koa-router');
const { getAllCyclists, 
        getCyclistById,
        createNewCyclist,
        updateCyclist } = require('../services/redartsClient');

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = await getAllCyclists();
});

router.get('/:id', async (ctx) => {
    const cyclistId = ctx.params.id;
    ctx.body = await getCyclistById(cyclistId);
});

router.post('/', async (ctx) => {
    const cyclist = ctx.request.body;
    await createNewCyclist(cyclist);
    ctx.body = 'ok';
});

router.patch('/:id', async (ctx) => {
    const cyclistChanges = ctx.request.body;
    const cyclistId = ctx.params.id;
    await updateCyclist(cyclistId, cyclistChanges);
    ctx.body = 'ok';
});

module.exports = router.routes();