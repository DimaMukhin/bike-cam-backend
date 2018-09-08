const Router = require('koa-router');
const { getAllTrips, getTripById } = require('../services/redartsClient');

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = await getAllTrips();
});

router.get('/:id', async (ctx) => {
    const tripId = ctx.params.id;
    ctx.body = await getTripById(tripId);
});

module.exports = router.routes();