# Creating a web server

## Response Object

- res.setHeader`(<header-name>, <value>)

- res inherits from `http.ServerResponse` which in turn inherits form `http.OutgoingMessage` (a Node core internal constructor) which inherits from stream.Stream

- For all practical purposes, res object is a writable object

-

## Request Object

- `req.method` - http verb

- `req.url` - it holds the relative path after the host portion including query strings

## **`url.parse(urlString[, parseQueryString[,slashesDenoteHost]])`**

- urlString< string>

- parseQueryString< boolean>

- slashesDenoteHost <boolean>

Ref: https://nodejs.org/dist/latest-v20.x/docs/api/url.html#urlparseurlstring-parsequerystring-slashesdenotehost

- `express-generator` generates the barebone structure of an express application
- The difference between the function passed to `http.createServer` & `app.use` is that function used in the latter can also have a third parameter called **next** which is an error callback function that is called when the function passed to `app.use` has completed any tasks and is ready to handover to the subsequent function via **app.use**.
- `res.send` is a method added by express that will detect the **Content-Type** from the input, and perform other additional operations which is used in place of `res.end`

**`npx nsd-check`** - to check the essential requirements for express app (for e.g. server listens on the port specified on environment file)

`fastify.setNotFoundHandler((request, response) => {})`

- `npm init fastify` - to setup a basic fastify project\

- package **fastify-cli** is required to run the fastify project

- command `fastify start -l info app.js` can be used to run a fastify project

- for dev purposes you can `-P` and `-w` flags additionally

- `fastify.register`
- `fastify.get`
-

- Ref: https://github.com/fastify/fastify-cli?tab=readme-ov-file#options

| Description                                                                                                                                                                      | Short command | Full command          | Environment variable        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------- | --------------------------- |
| Path to configuration file that can be used to manage the options listed below                                                                                                   | `-c`          | `--config`            | `FASTIFY_CONFIG or CONFIG`  |
| Port to listen on (default to 3000)                                                                                                                                              | `-p`          | `--port`              | `FASTIFY_PORT or PORT`      |
| Address to listen on                                                                                                                                                             | `-a`          | `--address`           | `FASTIFY_ADDRESS`           |
| Socket to listen on                                                                                                                                                              | `-s`          | `--socket`            | `FASTIFY_SOCKET`            |
| Module to preload                                                                                                                                                                | `-r`          | `--require`           | `FASTIFY_REQUIRE`           |
| Log level (default to fatal)                                                                                                                                                     | `-l`          | `--log-level`         | `FASTIFY_LOG_LEVEL`         |
| Path to logging configuration module to use                                                                                                                                      | `-L`          | `--logging-module`    | `FASTIFY_LOGGING_MODULE`    |
| Start Fastify app in debug mode with nodejs inspector                                                                                                                            | `-d`          | `--debug`             | `FASTIFY_DEBUG`             |
| Set the inspector port (default: 9320)                                                                                                                                           | `-I`          | `--debug-port`        | `FASTIFY_DEBUG_PORT`        |
| Set the inspector host to listen on (default: loopback address or `0.0.0.0` inside Docker or Kubernetes)                                                                         |               | `--debug-host`        | `FASTIFY_DEBUG_HOST`        |
| Prints pretty logs                                                                                                                                                               | `-P`          | `--pretty-logs`       | `FASTIFY_PRETTY_LOGS`       |
| Watch process.cwd() directory for changes, recursively; when that happens, the process will auto reload                                                                          | `-w`          | `--watch`             | `FASTIFY_WATCH`             |
| Ignore changes to the specified files or directories when watch is enabled. (e.g. `--ignore-watch='node_modules .git logs/error.log'` )                                          |               | `--ignore-watch`      | `FASTIFY_IGNORE_WATCH`      |
| Prints events triggered by watch listener (useful to debug unexpected reload when using `--watch` )                                                                              | `-V`          | `--verbose-watch`     | `FASTIFY_VERBOSE_WATCH`     |
| Use custom options                                                                                                                                                               | `-o`          | `--options`           | `FASTIFY_OPTIONS`           |
| Set the prefix                                                                                                                                                                   | `-x`          | `--prefix`            | `FASTIFY_PREFIX`            |
| Set the plugin timeout                                                                                                                                                           | `-T`          | `--plugin-timeout`    | `FASTIFY_PLUGIN_TIMEOUT`    |
| Defines the maximum payload, in bytes, that the server is allowed to accept                                                                                                      |               | `--body-limit`        | `FASTIFY_BODY_LIMIT`        |
| Set the maximum ms delay before forcefully closing pending requests after receiving SIGTERM or SIGINT signals; and uncaughtException or unhandledRejection errors (default: 500) | `-g`          | `--close-grace-delay` | `FASTIFY_CLOSE_GRACE_DELAY` |
