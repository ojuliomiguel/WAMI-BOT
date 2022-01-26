import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { mailerConfig } from "../Config/mailer.config";
import { qrCodeEmail } from "../Templates/QrCodeEmail";

class Mailer {

    constructor(private _nodemailer: any) {
        this._nodemailer = nodemailer.createTransport(mailerConfig)
    }

    public async sendEmail() {
        try {
            const emailResponse = await this._nodemailer.sendMail(qrCodeEmail);

            return emailResponse;
        } 
        catch (error) {
            console.log(error.message);  
        }
    }
}

export const mailer = new Mailer(nodemailer); 