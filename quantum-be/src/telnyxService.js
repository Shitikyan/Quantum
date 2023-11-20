const telnyx = require("telnyx");

const telnyxApiKey = "YOUR_TELNYX_API_KEY";
telnyx.init({ apiKey: telnyxApiKey });

const sendCongratulatoryEmail = async (userEmail) => {
  try {
    const message = await telnyx.messages.create({
      from: "aiquantum15@gmail.com",
      to: userEmail,
      text: "CONGRATULATIONS! YOUR ORDER IS ACCEPTED! Our operator will contact you shortly for confirmation.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendCongratulatoryEmail;
