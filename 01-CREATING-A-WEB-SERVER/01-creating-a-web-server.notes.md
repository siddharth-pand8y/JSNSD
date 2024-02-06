# Creating a web server



## Response Object

- res.setHeader`(<header-name>, <value>)

- res inherits from `http.ServerResponse` which in turn inherits form `http.OutgoingMessage` (a Node core internal constructor) which inherits from stream.Stream

- For all practical purposes, res object is a writable object

- 

## Request Object

    - `req.method` - http verb

    -  `req.url` - it holds the relative path after the host portion including query strings



## **`url.parse(urlString[, parseQueryString[,slashesDenoteHost]])`**

    - urlString< string>

    - parseQueryString< boolean>

    - slashesDenoteHost <boolean>

Ref: https://nodejs.org/dist/latest-v20.x/docs/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost

- `express-generator` generates the barebone structure of  an express application
- The difference between the function passed to `http.createServer` & `app.use` is that function used in the latter can also have a third parameter called **next** which is an error callback function that is called when the function passed to `app.use` has completed any tasks and is ready to handover to the subsequent function via **app.use**. 
- `res.send`  is a method added by express that will detect the **Content-Type** from the input, and perform other additional operations which is used in place of `res.end`



**`npx nsd-check`** -  to check the essential requirements for express app (for e.g. server listens on the port specified on environment file)



`fastify.setNotFoundHandler((request, response) => {})`

