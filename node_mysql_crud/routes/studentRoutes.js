const express = require('express');
const { getStudents, getStudentByID } = require('../controllers/studentController');

// router object
const router = express.Router();

// routes

// GET ALL STUDENTS LIST || GET
router.get('/getall', getStudents);

// GET STUDENTS BY ID
router.get('/get/:id', getStudentByID);

module.exports = router;