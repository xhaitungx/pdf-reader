const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors);
server.listen(3000, () => {
  console.log("listening...");
});
