"use strict";

const { Router } = require("express");
const fs = require("node:fs");
const router = Router();

const htmlContent = fs.readFileSync("./template/hello.html", 'utf-8');

router.get("/", (req, res) => {
  res.send(htmlContent);
});

module.exports = router;
