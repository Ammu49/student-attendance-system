import mongoose from "mongoose";

const subjectClassSchema = new mongoose.Schema({
    subjectClassId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    className: {
        type: String,
        required: true  
    },
    enrolledStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StuSdent'
    }],
    schedule: {
        dayOfWeek: {
            type: [Number],  
            required: true
        },
        startTime: {
            type: String,
            required: true  // 9:00
        },
        endTime: {
            type: String,
            required: true  // 10:30
        },
    },
    semester: {
        type: Number,
        required: true
    },
    year: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const SubjectClass = mongoose.model('SubjectClass', subjectClassSchema);
export default SubjectClass;