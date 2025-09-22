const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  adminId: {
    type: String,
    required: true,
    unique: true
  },
  permissions: {
    canManageUsers: {
      type: Boolean,
      default: true
    },
    canManageSubjects: {
      type: Boolean,
      default: true
    },
    canViewAllData: {
      type: Boolean,
      default: true
    },
    canModifySystemSettings: {
      type: Boolean,
      default: true
    },
    canGenerateReports: {
      type: Boolean,
      default: true
    },
    canManageRoles: {
      type: Boolean,
      default: true
    }
  },
  contactNumber: {
    type: String,
    required: true
  },
  lastSystemAccess: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.Schema('Admin', adminSchema);