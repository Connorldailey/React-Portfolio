import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
 
console.log('Connecting to MongoDB URI:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolioDB');

const db = mongoose.connection;

export default db;