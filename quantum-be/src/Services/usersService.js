const User = require("../models/userModel");

const getUsers = async (_, res) => {
  const users = await User.find({});
  return res.status(200), send(users);
};

const validate = ({ firstname, lastname, email, phone }) => {
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(?:(?:\+|00)\d{1,3}[\s-]?)?(?:\d{1,4}[\s-]?){1,14}\d$/;

  return (
    nameRegex.test(firstname) &&
    nameRegex.test(lastname) &&
    emailRegex.test(email) &&
    phoneRegex.test(phone)
  );
};

const createUser = async (req, res) => {
  try {
    if (!validate(req.body)) throw new Error("Validation error");

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).send("User created successfully");
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  createUser,
  getUsers,
};
