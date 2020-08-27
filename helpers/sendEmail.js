const nodemailer = require('nodemailer')

function sendMailRegister(payload) {
    // console.log('test');
    // console.log(payload);

    var transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'reg.easytravel@gmail.com',
        pass: 'easytravel123'
      }
    });

    const mail = {
      to: payload.email,
      from: 'reg.easytravel@gmail.com',
      subject: '[Easy Travel] - Success Registration',
      text: `Your Account Has Been Registered!`,
      html: `<h4>Welcome!</h4>`
    };

    transport.sendMail(mail, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent', info.messageId);
    });
  }


  module.exports = sendMailRegister