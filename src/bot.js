const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
    if (message.body === '/foto') {
        const fotoPath = path.join(__dirname, 'fotos', 'suaFoto.jpg');
        if (fs.existsSync(fotoPath)) {
            const foto = MessageMedia.fromFilePath(fotoPath);
            client.sendMessage(message.from, foto);
        } else {
            message.reply("A foto solicitada não foi encontrada.");
        }
    }
});

client.initialize();
