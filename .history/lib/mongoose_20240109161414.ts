import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL)
    {
        return console.log("MISSING MONGODB_URL")
    }

    if (isConnected)
    {
        return console.log("ALREADY CONNECTED TO DATABASE")
    }

    try {
        await mongoose.connect
    } catch (error) {
        console.log("ERROR CONNECTING TO DATABASE : ", error)
    }
}