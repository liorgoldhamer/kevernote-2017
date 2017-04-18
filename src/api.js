const fetchJSON = (url, opts = {}) => fetch(url, opts).then(r => r.json());

const url = 'http://localhost:3001';

export default {
  notes: {
    all: () => fetchJSON(`${url}/notes`),
    get: id => fetchJSON(`${url}/notes/${id}`),
    create: body => fetchJSON(`${url}/notes/`, { method: 'post', body: JSON.stringify(body) }),
    update: (id, body) =>
      fetchJSON(`${url}/notes/${id}`, { method: 'put', body: JSON.stringify(body) }),
    delete: id => fetchJSON(`${url}/notes/${id}`, { method: 'delete' }),
  },
};
