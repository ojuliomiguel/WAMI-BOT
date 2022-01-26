import { dotenv } from './dotenv.config'

dotenv;

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env;

export const mailerConfig = {
  host: `${EMAIL_HOST}`,
  port: Number(EMAIL_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: `${EMAIL_USER}`,
    pass: `${EMAIL_PASSWORD}`,
  },
  logger: true
}

