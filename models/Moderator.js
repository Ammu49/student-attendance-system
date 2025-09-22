import mongoose from "mongoose";

const moderatorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  moderatorId: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  permissions: {
    canManageUsers: {
      type: Boolean,
      default: true
    },
    canViewAllAttendance: {
      type: Boolean,
      default: true
    },
    canModifyAttendance: {
      type: Boolean,
      default: true
    },
    canGenerateReports: {
      type: Boolean,
      default: true
    },
    canManageSubjects: {
      type: Boolean,
      default: false
    }
  },
  assignedSubjectClasses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubjectClass'
  }],
  contactNumber: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Moderator = mongoose.model('Moderator', moderatorSchema);
export default Moderator;