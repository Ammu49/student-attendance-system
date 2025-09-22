import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectCode: {
        type: String,
        unique: true,
        required: true,
        uppercase: true
    },
    subjectName: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true,
        min: 1,
        max: 8,
    },
    credits: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: null
    },

});

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;