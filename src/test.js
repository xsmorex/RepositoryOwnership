const Emailer = require("./Emailer");

let email = new Emailer("banasikannie@gmail.com", "some hash", "https://github.com/xsmorex");

let emailSendCallback = function(err, info) {
  console.log(err);
  console.log(info);
};

email.sendEmail(emailSendCallback);

