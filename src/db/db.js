import mongoose, { connection } from 'mongoose';
import { DB_NAME } from '../constants';

const dbconnect = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log('connection established');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


export default dbconnect;