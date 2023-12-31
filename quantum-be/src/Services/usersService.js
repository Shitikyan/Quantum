const User = require("../models/userModel");
const { sendTelnyxSms, sendVerificationCode } = require("./telnyxService");
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

const getUsersByPhoneNumber = async (req, res) => {
  try {
    const { phone } = req.params;

    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    if (!validate(req.body)) throw new Error("Validation error");
    const newUser = new User(req.body);
    await newUser.save();
    const code = sendVerificationCode(req.body.phone);
    await User.updateOne({ phone: req.body.phone }, { $set: { code } });
    return res.status(201).send({ phone: req.body.phone });
  } catch (err) {
    return res.json(err);
  }
};

const verifyUser = async (req, res) => {
  try {
    const { code, phone } = req.body;
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).send("User not found");
    }
    if (code == user.code) {
      await User.updateOne({ phone }, { verified: 1 });
      sendTelnyxSms(phone);
      return res.status(200).send({ verified: true });
    } else {
      return res.status(200).send({ verified: false });
    }
  } catch (err) {
    return res.json(err);
  }
};

const sendCodeAgain = async (req, res) => {
  try {
    const { phone } = req.body;
    const code = sendVerificationCode(phone);
    await User.updateOne({ phone }, { $set: { code } });
    return res.status(200).send(true);
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  createUser,
  getUsers,
  verifyUser,
  getUsersByPhoneNumber,
  sendCodeAgain,
};
