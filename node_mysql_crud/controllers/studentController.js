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

module.exports = { getStudents };