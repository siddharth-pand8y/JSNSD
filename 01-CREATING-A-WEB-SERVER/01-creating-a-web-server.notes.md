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


