const { Router } = require("express");
const {
  getUsers,
  createUser,
  verifyUser,
  getUsersByPhoneNumber,
  sendCodeAgain,
} = require("../Services/usersService");

const router = Router();

router.get("/", getUsers);
router.get("/:phone", getUsersByPhoneNumber);
router.post("/signup", createUser);
router.post("/verify", verifyUser);
router.post("/resend-verification", sendCodeAgain);

module.exports = router;
