require("dotenv").config();
const generateRandomInteger = require("../helpers/codeGenerator");
var telnyx = require("telnyx")(
  "KEY0189DA432F175141D5E2CE9125F9482B_l6tLeXw4CQjzvCuHdBtAYB"
);

const sendTelnyxSms = (userPhone) => {
  const number = "+15802889413";
  telnyx.messages.create(
    {
      from: number,
      to: userPhone,
      text: "CONGRATULATIONS!YOUR ORDER IS ACCEPTED! Our operator will contact you shortly for confirmation., World!",
    },
    function (err, response) {
      console.log(response);
      console.error(err);
    }
  );
};

const sendVerificationCode = (userPhone) => {
  const code = generateRandomInteger();
  const number = "+15802889413";
  telnyx.messages.create(
    {
      from: number,
      to: userPhone,
      text: code,
    },
    function (err, response) {
      console.log(response);
      console.error(err);
    }
  );
  return code;
};
module.exports = { sendTelnyxSms, sendVerificationCode };
