import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student",
    },
    division: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Division",
    },
    lastLogin: {
        type: Date,
        default: null
    }
}, 
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;