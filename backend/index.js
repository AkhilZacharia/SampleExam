const express = require('express');
const app = new express();
const cors= require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();
const nodemailer = require("nodemailer");
let value ;
app.post("/email", async (req, res) => {
     console.log(req.body.mail);
    value = Math.floor(1000 + Math.random() * 9000);
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          user: process.env.Mail, 
          pass: process.env.Code  
        }
      });

    let mailOptions = {
            from: process.env.Mail, 
            to: req.body.mail, 
            subject: 'Ticket Booking Confirmation', 
            text: `Your OTP is ${value}`, 
          };
        
    transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log('Error sending email:', error);
              res.send('failed')
            } else {
              console.log('Email sent:', info.response);
              res.send('success') 
            }
          });
  
})

app.post("/otp", async (req, res) => {
    console.log(req.body.otp);
    console.log(value);
    
    if (req.body.otp == value) {
        console.log('otp success');
        res.send(true)
    } else {
        res.send(false)
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is active on Port ${process.env.PORT}`);
});