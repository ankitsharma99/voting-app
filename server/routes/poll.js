const router = require("express").Router();

const handle = require("../handlers");
const auth = require("../middlewares/auth");

router.route("/").get(handle.showPolls).post(auth, handle.createPoll);

router.get("/user", auth, handle.usersPolls);

module.exports = router;
