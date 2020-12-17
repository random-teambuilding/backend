import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.emailId,
    pass: process.env.emailPassword
  }
});

exports.sendmail = (async (email,mailsubject,contents) => {
  await transporter.sendMail({
    from: `"랜덤 팀빌딩 팀" - <${mailsubject}>`,
    to: email,

    subject: mailsubject,
    text: contents,
  });

  return;
});