const telnyx = require("telnyx");

const telnyxApiKey =
  "KEY0189DA432F175141D5E2CE9125F9482B_l6tLeXw4CQjzvCuHdBtAYB";
const telnyxTool = telnyx(telnyxApiKey);

const sendCongratulatoryEmail = async (_, res) => {
  console.log("????????????");
  try {
    const message = await telnyxTool.sendEmail.create({
      from: "aiquantum15@gmail.com",
      to: "aiquantum15@gmail.com",
      text: "CONGRATULATIONS! YOUR ORDER IS ACCEPTED! Our operator will contact you shortly for confirmation.",
    });
    console.log(message);
  } catch (error) {
    return res.send(error);
    console.error("Error sending email:", error);
  }
};

const sendCongratulatorySMS = async (_, res) => {
  try {
    const message = await telnyxTool.messages.create({
      to: "+37477233577",
      text: "CONGRATULATIONS! YOUR ORDER IS ACCEPTED! Our operator will contact you shortly for confirmation.",
      subject: "From Telnyx!",
      media_urls: ["http://example.com"],
      webhook_url: "http://example.com/webhooks",
      webhook_failover_url: "https://backup.example.com/hooks",
      use_profile_webhooks: true,
      type: "MMS",
    });

    console.log(`SMS sent with ID: ${message.id}`);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = { sendCongratulatoryEmail, sendCongratulatorySMS };
