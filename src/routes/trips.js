const Router = require('koa-router');
const { getAllTrips, 
        getTripById,
        createNewTrip,
        updateTrip } = require('../services/redartsClient');

const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = await getAllTrips();
});

router.get('/:id', async (ctx) => {
    const tripId = ctx.params.id;
    ctx.body = await getTripById(tripId);
});

router.post('/', async (ctx) => {
    const trip = ctx.request.body;
    await createNewTrip(trip);
    ctx.body = 'ok';
});

router.patch('/:id', async (ctx) => {
    const tripChanges = ctx.request.body;
    const tripId = ctx.params.id;
    await updateTrip(tripId, tripChanges);
    ctx.body = 'ok';
});

module.exports = router.routes();