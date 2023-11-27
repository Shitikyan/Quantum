const { Router } = require("express");
const {
  getUsers,
  createUser,
  verifyUser,
} = require("../Services/usersService");

const router = Router();

router.get("/", getUsers);
router.post("/signup", createUser);
router.post("/verify", verifyUser);

module.exports = router;
