const nodemailer = require('nodemailer');
const env = require("node-env-file");

// Path to environment file
env(__dirname + './../../.env');

module.exports = class Email {

  constructor(emailAddr, hash, repoURL) {
    this.emailAddr = emailAddr;
    this.hash = hash;
    this.repoURL = repoURL;
  }

  sendEmail (callback) {

    const authOptions = {
      service: process.env.EMAILSERVICE,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    };

    const emailOptions = {
      from: process.env.EMAIL,
      to: this.emailAddr,
      subject: "Indorse Demo",
      text: `Please add this secret hash: '${this.hash}' in a file called 'secret' in your repository: ${this.repoURL}`
    };

    const transporter = nodemailer.createTransport(authOptions);
    transporter.sendMail(emailOptions, callback)

  }

};