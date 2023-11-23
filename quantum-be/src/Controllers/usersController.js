const { Router } = require("express");
const { getUsers, createUser } = require("../Services/usersService");

const router = Router();

router.get("/", getUsers);
router.post("/signup", createUser);

module.exports = router;
