const { map } = require('ramda');

module.exports = map(
  map(ctx => {
    ctx.res.setHeader('Access-Control-Allow-Origin', '*');
    return ctx;
  })
);
