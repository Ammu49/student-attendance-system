import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    teacherId: {
        type: String,
        unique: true,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    subjects:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    currentStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    contactNumber: {
        type: Number,
        required: true
    },
}, 
{
    timestamps: true
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;