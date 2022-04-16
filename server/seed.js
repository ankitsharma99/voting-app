require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI);

const db = require("./models/index");

const users = [
  { username: "admin", password: "password" },
  { username: "ankit", password: "password" },
];

const polls = [
  {
    question: "Cast your vote",
    options: ["CONGRESS", "BJP", "AAP"],
  },
  {
    question: "Best gaming consoles?",
    options: ["XBOX ONE", "PS4", "NINTENDO"],
  },
];

const seed = async () => {
  try {
    await db.User.remove();
    console.log("DROP ALL USERS");

    await db.Poll.remove();
    console.log("DROP ALL POLLS");

    await Promise.all(
      users.map(async (user) => {
        const data = await db.User.create(user);
        await data.save();
      })
    );
    console.log("Created Users", JSON.stringify(users));

    await Promise.all(
      polls.map(async (poll) => {
        poll.options = poll.options.map((option) => ({ option, votes: 0 }));
        const data = await db.Poll.create(poll);
        const user = await db.User.findOne({ username: "admin" });
        data.user = user;
        user.polls.push(data._id);
        await user.save();
        await data.save();
      })
    );
    console.log("CREATED POLLS", JSON.stringify(polls));
  } catch (err) {
    console.error(err);
  }
};

seed();
