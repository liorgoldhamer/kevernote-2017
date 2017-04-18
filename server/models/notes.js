const { merge, type, find, findIndex, propEq } = require('ramda');

const notes = [
  {
    id: 2,
    title: 'Note 2',
    body: 'Bax Quum',
    createdAt: 1448649681080,
  },
  {
    id: 1,
    title: 'Note 1',
    body: 'Foo Bar Baz',
    createdAt: 1448649671080,
  },
];

const delay = (s, value) =>
  new Promise(resolve => {
    setTimeout(() => resolve(value), s * 1000);
  });

const note = {
  all: () => {
    return delay(1, notes);
  },
  get: id => {
    return delay(1, find(propEq('id', parseInt(id)), notes));
  },
  create: note => {
    notes.unshift(note);
    return delay(1, true);
  },
  update: (id, updates) => {
    const idx = findIndex(propEq('id', parseInt(id)), notes);
    if (idx === -1) return delay(1, false);

    notes[idx] = merge(notes[idx], updates);
    return delay(1, true);
  },
  delete: id => {
    const idx = findIndex(propEq('id', parseInt(id)), notes);
    if (idx === -1) return delay(1, false);

    notes.splice(idx, 1);
    return delay(1, true);
  },
};

module.exports = note;
