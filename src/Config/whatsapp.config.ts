import * as path from 'path';
import * as fs from 'fs';
import { CreateOptions } from 'venom-bot';
import { exportQrCode } from '../Helpers/helpers.exportQrCode';


const whatsClientConfig: CreateOptions = {
    session: 'WAMI',
    catchQR: exportQrCode,
    folderNameToken: 'tokens', //folder name when saving tokens
    mkdirFolderToken: '', //folder directory tokens, just inside the venom folder, example:  { mkdirFolderToken: '/node_modules', } //will save the tokens folder in the node_modules directory
    headless: true, // Headless chrome
    devtools: false, // Open devtools by default
    useChrome: true, // If false will use Chromium instance
    debug: false, // Opens a debug session
    logQR: true, // Logs QR automatically in terminal
    disableWelcome: true, 
    disableSpins: true, // Will disable Spinnies animation, useful for containers (docker) for a better log
    updatesLog: true, // Logs info updates automatically in terminal
    autoClose: 120000, 
    
    
};

const exportQrCodeToPng = async (qrcode: string) => {
    let dir = path.resolve(__dirname, '../..', 'public', 'images', 'qrCode.png');
    const imageBuffer = Buffer.from(qrcode.replace('data:image/png;base64,',''), 'base64');
    fs.writeFileSync(dir, imageBuffer);

}

export {
    whatsClientConfig,
    exportQrCodeToPng
}