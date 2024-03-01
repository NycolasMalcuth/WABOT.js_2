const { Client, MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

const client = new Client();

client.on('qr', (qr) => {
    // Gerar QR Code.
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
    if(message.body === '/foto') {
        const fotoPath = path.join(__dirname, 'fotos', 'suaFoto.jpg'); // Altere 'suaFoto.jpg' pelo nome do arquivo desejado.
        const foto = MessageMedia.fromFilePath(fotoPath);

        message.reply(foto);
    }
});

client.initialize();
