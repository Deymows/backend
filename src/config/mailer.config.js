import nodemailer from 'nodemailer'
import ENVIRONMENT from './enviroment.config.js'

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'elosogamerxdxd@gmail.com' ,
            pass: ENVIRONMENT.GMAIL_PASSWORD
        }
    }
)

export default transporter