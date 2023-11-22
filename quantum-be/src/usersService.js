const User = require("./models/userModel");

const getUsers = async (_, res) => {
  const users = await User.find({});
  return res.status(200), send(users);
};

const createUser = async (req, res) => {
  const { email, firstname, lastname, phone } = req.body;
  const newUser = new User({ email, firstname, lastname, phone });

  await newUser.save();

  return res.status(201).send("User created successfully");
};

module.exports = {
  createUser,
  getUsers,
};
