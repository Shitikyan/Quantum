require("dotenv").config();
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

module.exports = { sendTelnyxSms };
