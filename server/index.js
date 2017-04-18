const { listen, ok } = require('zealot-core');
const json = require('zealot-core/mid/json');
const { route, crud } = require('zealot-core/mid/route');
const { pipe } = require('ramda');
const notes = require('./models/notes');
const cors = require('./cors');

const port = 3001;

const routes = pipe(json(), cors(), route([...crud('notes', notes), ['*', '*', () => ok.send('NOT FOUND')]]))(
  listen(port)
);
