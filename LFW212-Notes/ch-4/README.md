`@fastify/static` - used to for serving static html files
`@fastify/view` - for serving content via template engines like handlebars



The HTTP specification has a header called [<u>Transfer-Encoding</u>](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding) which can be set to chunked. This means that chunks of data can be sent over HTTP and in many cases browser-clients can begin parsing immediately. Node.js Streams also allow for chunked reading, processing and writing of data.

Ref: [Transfer-Encoding - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
[Syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding#syntax)

--------------------------------------------------------------------------------------------

```http
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
```

    





```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
```
