const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        usn: {
            type: String,
            unique: true,
            required: true
        },
        rollNumber: {
            type: String,
            required: true,
            unique: true
        },
        enrolledSubjects:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubjectClass',
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
            max: 8
        },
         batch: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        guardianContact: {
            type: Number,
            required: true
        },
        currentTeachers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher'
        }],
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);