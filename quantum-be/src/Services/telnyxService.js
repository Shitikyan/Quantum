require("dotenv").config();
var telnyx = require("telnyx")(process.env.TENYX_API_KEY);

// const sensTelnyxSms
telnyx.messages.create(
  {
    from: "+18665552368", // Your Telnyx number
    to: "+18445552367",
    text: "Hello, World!",
  },
  function (err, response) {
    // asynchronously called
    console.log(response);
  }
);


module.exports = {};
