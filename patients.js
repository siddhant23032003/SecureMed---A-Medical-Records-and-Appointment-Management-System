const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  medicalHistory: { type: String },
  appointments: [{ date: Date, notes: String }]
});

module.exports = mongoose.model('Patient', PatientSchema);
