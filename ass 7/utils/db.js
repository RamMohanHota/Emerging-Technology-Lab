import mongoose from 'mongoose';
import dns from 'dns';
dns.setServers(['8.8.8.8']);
const DB_URL=process.env.mongo_url
async function connectToDB(){
    try{
        await mongoose.connect(DB_URL)
        console.log("MongoDB Connect")
    } catch(error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
export default connectToDB;