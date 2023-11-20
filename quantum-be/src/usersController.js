const express = require("express");
const { getUsers, createUser } = require("./usersService");

const router = express.Router();

router.get("/", getUsers);
router.post("/signup", createUser);

module.exports = router;
