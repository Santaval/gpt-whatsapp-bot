const qrcode = require('qrcode-terminal')
const {Client, LocalAuth} = require('whatsapp-web.js')
const fs = require("fs")



const client = new Client({
    authStrategy: new LocalAuth()
})

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true})
})




client.on('ready', () => {
    console.log('Ciient ready')
    client.sendMessage("50687156553@c.us", "Hola Aaron")
        .then(res => {
            if (res.id.fromMe) {
                console.log('Enviado')
            }
        })
})

client.initialize()

