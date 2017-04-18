const { listen, ok } = require('zealot-core');
const json = require('zealot-core/mid/json');
const { route, crud } = require('./route');
const { pipe } = require('ramda');
const notes = require('./models/notes');
const { corsHeaders, corsRoute } = require('./cors');
const log = require('./log');

const port = 3001;

const routes = pipe(
  json(),
  corsHeaders(),
  route([corsRoute, ...crud('notes', notes), ['*', '*', () => ok.send('NOT FOUND')]])
)(listen(port));
