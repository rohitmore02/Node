const express = require('express');
const { getStudents } = require('../controllers/studentController');

// router object
const router = express.Router();

// routes

// GET ALL STUDENTS LIST || GET
router.get('/getall', getStudents);


module.exports = router;