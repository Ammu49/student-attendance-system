import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL)
        console.log(`db connected : ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}
export default dbConnect;