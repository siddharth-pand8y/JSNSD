const express = require("express");
const router = express.Router();
const app = express();
const data = require("./data.js");
const http = require("http");

router.get("/", async (req, res) => {
  res.send(await data());
});

app.use("/", router);

app.use((req, res, next) => {
  res.sendStatus(404);
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
