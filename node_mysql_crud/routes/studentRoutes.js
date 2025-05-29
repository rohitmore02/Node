const express = require('express');
const { getStudents, getStudentByID, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

// router object
const router = express.Router();

// routes

// GET ALL STUDENTS LIST || GET
router.get('/getall', getStudents);

// GET STUDENTS BY ID
router.get('/get/:id', getStudentByID);

// CREATE STUDENT || POST
router.post('/create', createStudent);

// CREATE STUDENT
router.put('/update/:id', updateStudent);

// DELETE STUDENT
router.delete('/delete/:id', deleteStudent);

module.exports = router;