const express = require('express');
const Patient = require('../models/Patient');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

router.post('/', auth, async (req, res) => {
  const { name, dob, medicalHistory } = req.body;
  const newPatient = new Patient({ name, dob, medicalHistory });
  await newPatient.save();
  res.json(newPatient);
});

router.put('/:id', auth, async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(patient);
});

module.exports = router;
