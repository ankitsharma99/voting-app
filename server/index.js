require("dotenv").config();
// requiring node modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// initializing express
const app = express();
// constant variables. DO NOT CHANGE
const PORT = process.env.PORT;

// paths
const handle = require("./handlers");
const db = require("./models"); // models path
const routes = require("./routes");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/api/auth", routes.auth);
app.use("/api/poll", routes.poll);

// error middleware (endpoints that are not recognized)
app.use(handle.notFound);
app.use(handle.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
