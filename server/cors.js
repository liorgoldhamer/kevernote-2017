const { map } = require('ramda');

const corsHeaders = map(
  map(ctx => {
    ctx.res.setHeader('Access-Control-Allow-Origin', '*');
    return ctx;
  })
);

const corsRoute = [
  'options',
  '*',
  ctx => {
    ctx.res.setHeader('Access-Control-Allow-Origin', '*');
    ctx.res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
    ctx.res.end();
    return ctx;
  },
];
module.exports = { corsRoute, corsHeaders };
