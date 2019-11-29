const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'greenpodcastru@gmail.com',
        pass: 'Green420RU'
    }
});

let mailOption = {
    from: 'greenpodcastru.com',
    to: 'rammses_@live.com.mx',
    subject: 'Te has suscrito correctamente.',
    html:`
        <h1> Bienvenido a green podcast<h1>
        <br>
        <h2>Escucha esto esto!!!</h2>
        <a href="https://ambientes-distribuidos.herokuapp.com/" target="_blank"></a> 
    `
};


transporter.sendMail(mailOption, function(err,data){
    if(err){
        console.log('Error');
    }else{
        console.log('Correo enviado')
    }
});

