import { dotenv } from './dotenv.config';

dotenv;

export const endpoints = {
    cepBaseUrl: process.env.CEP_BASE_URL
}