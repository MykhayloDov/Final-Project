const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const users = [];
app.use(cors());
app.get('/data', function (request, response) {
    response.send(users);
});

const nodemailer = require('nodemailer');

let  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'myk.nadia@gmail.com',
        pass: 'VM83-a47'
    }

});

app.post('/data', function (req, res) {
    users.push(req.body);
    const mailOptions = {
        from: 'myk.nadia@gmail.com',
        to: 'mykhaylo.dov@gmail.com',
        subject: 'Test message Pastelka',
        html: `<div style="color: black">
<h3>Нове замовлення на Паштелки!</h3>
<br>
<p>Кількість наборів: ${req.body.counterValue}</p>
<p>Імя: ${req.body.name}</p>
<p>Номер телефону: ${req.body.phone}</p>
<p>Дата: ${req.body.date}</p>
<p>Адресс або примітка: ${req.body.notes}</p>
</div>`
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return console.log(err);
        console.log('email Sent', info);
    });
    res.send(200);
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);
