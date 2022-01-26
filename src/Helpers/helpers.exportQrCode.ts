import { writeFileSync } from 'fs';
import { mailer } from '../Services/Mailer';

export function exportQrCode(base64Qr: string, asciiQR: string) {
    try {
        const matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
            response: any = {};

        if (matches?.length !== 3) {
            return new Error('Invalid input string');
        }

        response.type = matches[1];
        response.data = Buffer.from(matches[2], 'base64');

        const imageBuffer = response;

        writeFileSync('./temp/qrCode.png', imageBuffer['data'], 'binary');
        
        mailer.sendEmail();
    } catch (error) {
        console.log(error.message);
    }
}