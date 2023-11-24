require("dotenv").config();
var telnyx = require("telnyx")(process.env.TENYX_API_KEY);

// const sensTelnyxSms
const sendTelnyxSms = (userPhone) => {
  const number = process.env.TENYX_PHONE;
  telnyx.messages.create(
    {
      from: number,
      to: userPhone,
      text: "CONGRATULATIONS!YOUR ORDER IS ACCEPTED! Our operator will contact you shortly for confirmation., World!",
    },
    function (err, response) {
      console.log(response);
    }
  );
};

module.exports = { sendTelnyxSms };
