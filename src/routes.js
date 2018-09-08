module.exports = (router) => {
    router.prefix('/v1');
    router.use('/cyclists', require('./routes/cyclists'));
    router.use('/trips', require('./routes/trips'));
}