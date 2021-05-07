var express = require('express');
var router = express.Router();
var cors = require('cors');
const path = require('path');
require('dotenv').config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
/* Change values in .env
/* Variables include:
   FROM_EMAIL - This should be the email used on SendGrid.
   TO_EMAIL - The email you want information to be sent to, cannot be the same as FROM_EMAIL.
   SENDGRID_API_KEY - API key that you will make on SendGrid.
   INFO_MAIL - Dynamic Mail Template for the information that you as the website owner will recieve from the contact page.
   CONFIRM_MAIL - The email that will be sent to the person who wanted to contact you from the contact page.
*/

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  
  //From and to cannot be the same.
  var info_mail = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    templateId: process.env.INFO_MAIL
  }

  var confirm_mail = {
    from: process.env.FROM_EMAIL,
    to: email,
    templateId: process.env.CONFIRM_MAIL
  }

  sgMail
  .send(info_mail)
  .then(() => {
    console.log('Info Email sent');
    sgMail
    .send(confirm_mail)
    .then(() => {
      console.log('Confirm Email sent')
      res.json({
        status: 'success'
      })
    })
    .catch((error) => {
      console.error(error)
      res.json({
        status: 'fail'
      })
    })
  })
  .catch((error) => {
    console.error(error)
  })  
})

const app = express()
app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'), {root: __dirname});
  });
}
app.use('/', router)
app.listen(process.env.PORT || 3002)