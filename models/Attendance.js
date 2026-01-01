const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture',
    required: true
  },
  qrCodeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QRCode'
  },
  scanTime: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['present', 'late', 'absent'],
    default: 'present'
  },
  deviceInfo: {
    browser: String,
    os: String,
    ip: String
  },
  location: {
    latitude: Number,
    longitude: Number
  }
});

AttendanceSchema.index({ studentId: 1, lectureId: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);
