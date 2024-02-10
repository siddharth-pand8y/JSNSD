"use strict";
const fs = require("node:fs");
const { Router } = require("express");
const router = Router();

const htmlContent = fs.readFileSync("./template/index.html", 'utf-8');

router.get("/", (req, res) => {
    res.send(htmlContent);
});

module.exports = router;
