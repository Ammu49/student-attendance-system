const mongoose = require('mongoose');

const attendanceSessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  subjectClassId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubjectClass',
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  sessionType: {
    type: String,
    enum: ['lecture', 'tutorial', 'practical', 'exam'],
    default: 'lecture'
  },
  qrCode: {
    code: {
      type: String,
      required: true
    },
    generatedAt: {
      type: Date,
      required: true
    },
    expiresAt: {
      type: Date,
      required: true
    }
  },
  // Geolocation constraints for attendance
  location: {
    latitude: {
      type: Number,
      required: function() { return !this.isOnline; }
    },
    longitude: {
      type: Number,
      required: function() { return !this.isOnline; }
    },
    radius: {
      type: Number,
      default: 100 // meters
    },
    address: {
      type: String,
      required: function() { return !this.isOnline; }
    }
  },
  // Session timing
  scheduledStartTime: {
    type: Date,
    required: true
  },
  scheduledEndTime: {
    type: Date,
    required: true
  },
  // Session status
  status: {
    type: String,
    enum: ['scheduled', 'active', 'completed', 'cancelled'],
    default: 'scheduled'
  },
  // For online classes
  isOnline: {
    type: Boolean,
    default: false
  },
  meetingLink: {
    type: String,
    default: null
  },
  // Additional settings
  lateEntryBuffer: {
    type: Number,
    default: 15 // minutes
  }
}, {
  timestamps: true
});

module.exports = mongoose.Schema('AttendanceSession', attendanceSessionSchema);