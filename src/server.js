const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const Cors = require('@koa/cors');
const BodyParser = require('koa-bodyparser');
const Helmet = require('koa-helmet');

const port = process.env.PORT || 3000
const app = new Koa();
const router = new Router();

app.use(Helmet());

if (process.env.NODE_ENV === 'development') {
    app.use(Logger());
}

app.use(Cors());
app.use(BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422)
    }
}));

// API routes
require('./routes')(router);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log(`API server started on ${port}`));

// time to colission
// type of colllision
// speed?
// description of collision