const nodemailer = require('nodemailer');
const config = require('../config/mailConfig');

exports.sendMail = async ({ name, email, message }) => {
    const transporter = nodemailer.createTransport(config);
    return transporter.sendMail({
        from: email,
        to: process.env.RECEIVER,
        subject: `Message de ${name}`,
        text: message,
    });
};
