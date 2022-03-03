// requiring node modules
const express = require("express");
const handle = require("./handlers");

// initializing express
const app = express();

// paths

// constant variables. DO NOT CHANGE
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

// error middleware (endpoints that are not recognized)
app.use(handle.notFound);

app.use(handle.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${3000}`);
});
