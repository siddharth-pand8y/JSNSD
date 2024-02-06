"use strict";

const express = require("express");
const createError = require("http-errors");
const indexRoute = require('./routes/index');
const helloRoute = require('./routes/hello');

const app = express();

module.exports = app;

app.use('/', indexRoute);
app.use('/hello', helloRoute);

app.use((req, res, next) => {
  if (req.method !== "GET") {
    next(createError(405));
    return;
  }
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
