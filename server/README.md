## Usage:

```sh
curl http://localhost:3001/notes
# [{"id":1,"title":"Note 1","body":"Foo Bar Baz","createdAt":1448649671080},{"id":2,"title":"Note 2","body":"Bax Quum","createdAt":1448649681080}]

curl http://localhost:3001/notes/1
# {"id":1,"title":"Note 1","body":"Foo Bar Baz","createdAt":1448649671080}

curl http://localhost:3001/notes/666
# {}

curl -X POST -d '{"id": 666, "title": "Note 666", "body": "Note 666 body", "createdAt": 1448649691666}' http://localhost:3001/notes/
# {"ok": true}

curl http://localhost:3001/notes/666
# {"id":666,"title":"Note 666","body":"Note 666 body","createdAt":1448649691666}%

curl -X PUT -d '{"title": "New title for note 666"}' http://localhost:3001/notes/666
# {"ok": true}

curl http://localhost:3001/notes/666
# {"id":666,"title":"New title for note 666","body":"Note 666 body","createdAt":1448649691666}

curl -X DELETE http://localhost:3001/notes/666
# {"ok": true}

curl http://localhost:3001/notes/666
# {}
```
