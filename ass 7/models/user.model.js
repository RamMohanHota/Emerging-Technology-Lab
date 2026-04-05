import mongoose from "mongoose";
const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sic: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const User=mongoose.model("User", userScheme)
export default User;