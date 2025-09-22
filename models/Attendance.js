const attendanceRecordSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AttendanceSession',
    required: true
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  // Attendance marking details
  markedAt: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late', 'excused'],
    required: true
  },
  // Validation methods used
  validationMethods: {
    qrScanned: {
      type: Boolean,
      default: false
    },
    locationVerified: {
      type: Boolean,
      default: false
    },
  },
  // Location data when marked
  markedLocation: {
    latitude: {
      type: Number,
      required: function() { return !this.sessionId?.isOnline; }
    },
    longitude: {
      type: Number,
      required: function() { return !this.sessionId?.isOnline; }
    },
    accuracy: {
      type: Number,
      default: null
    }
  },
  // For manual corrections by teacher
  isManualEntry: {
    type: Boolean,
    default: false
  },
  manualEntryReason: {
    type: String,
    default: null
  },
  modifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.Schema('Attendance', attendanceRecordSchema);