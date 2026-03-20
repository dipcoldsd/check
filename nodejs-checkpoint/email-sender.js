const nodemailer = require('nodemailer');

// To actually use this to send to yourself, you must provide your real email and app password.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-own-email@gmail.com', // Sending to yourself
  subject: 'Test Email from Node.js Checkpoint',
  text: 'Hello from Node.js Nodemailer!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("Email error:", error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
