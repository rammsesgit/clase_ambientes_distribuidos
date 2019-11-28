const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'urielstarkiller011@gmail.com',
        pass: 'Ramsesselacome'
    }
});

let mailOption = {
    from: 'urielstarkiller011@gmail.com',
    to: 'urielchivas11@hotmail.com',
    subject: 'Testing',
    text: 'IT WORKS'
};


transporter.sendMail(mailOption, function(err,data){
    if(err){
        console.log('Error');
    }else{
        console.log('Correo enviado')
    }
});

