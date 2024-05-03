import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const PROJECT_ID = '660d8bf00218e04708abs'
export const DATABASE_ID = '660dab1018dd11d74c43'
export const COLLECTION_ID_MESSAGES = '660dab32a08e4ff2420e'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('660d8bf00218e04708ab');    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;