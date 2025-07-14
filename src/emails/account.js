// require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tech@shipwithg3.com",
    subject: "Welcome to the TaskApp",
    text: `Welcome to the app, ${name}. Let me know how you get along the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "tech@shipwithg3.com",
    subject: "Sorry to see you go from TaskApp",
    text: `Goodbye, ${name} for using our app. I hope to see you back sometime soon`,
  });
};

// sgMail.send({
//   to: "mirnesbb@gmail.com",
//   from: "tech@shipwithg3.com",
//   subject: "This is my first creation!",
//   text: "I hope this one actually get to you."

// })

// const msg = {
//   to: "tech@shipwithg3.com",
//   from: "tech@shipwithg3.com", // Use the email address or domain you verified above
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };

// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// })();

module.exports = {
  sendWelcomeMail,
  sendCancelEmail
};
