const db = require("../config/db");

// GET ALL STUDENTS LIST
const getStudents = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM students');
        if (!data) {
            res.status(404).send({
                success: false,
                message: 'No Records Found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'All Students Records',
            totalStudents: data[0].length,
            data: data[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get All Student API',
            error
        })
    }
};

// GET STUDENT BY ID
const getStudentByID = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: 'Invalid or Provide valid Student id'
            })
        }

        // const data = await db.query(` SELECT * FROM students WHERE id=`+studentId);
        const data = await db.query(` SELECT * FROM students WHERE id=?`,[studentId]);
        
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No Records Found'
            });
        }

        res.status(200).send({
            success: true,
            studentDetails: data[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Get student by id API',
            error
        })
    }
};

// CREATE STUDENT
const createStudent = async (req, res) => {
    try {
        const { name, roll_no, class: className, medium, fees } = req.body;
        if ( !name || !roll_no || !className || !medium || !fees ) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields'
            });
        }

        const data = db.query(`INSERT INTO students (name, roll_no, class, fees, medium) VALUES ( ? , ? , ? , ?, ? )`, [ name, roll_no, className, fees, medium ]);

        if (!data) {
            res.status(404).send({
                success: false,
                message: 'Error in INSERT QUERY'
            });
        }

        res.status(201).send({
            success: true,
            message: 'New Student Record Created'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Create Student API',
            error
        });
    }
};

module.exports = { getStudents, getStudentByID, createStudent };