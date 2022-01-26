import { join } from 'path';
import { dotenv } from '../Config/dotenv.config'

dotenv;

export const qrCodeEmail = {
    from: `"QR Code Aws Bot" < ${process.env.EMAIL_SENDER} >`,
    to: `${process.env.RECIPIENT_EMAIL}`,
    subject: "Bot QR Code",
    text: "Por favor scanear o QrCode para utilizar o bot",
    html: `<div>
                <h1 style="color: green"; text-align: center> QR CODE </h1>
                <img src="cid:QRCODE" alt="QR Code" width="300" height="300" />     
           </div> `,
    headers: { 'x-myheader': 'test header' },
    attachments: [{
        filename: 'qrCode.png',
        path: join(__dirname, '../../', 'temp', 'qrCode.png'),
        cid: 'QRCODE'
    }]
}