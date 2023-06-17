const students = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists ="SELECT s FROM students s WHERE s.email =$1"
const addStudents = 
"INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) ";
const removeStudents = "DELETE FROM students WHERE id = $1";
const getUpdateStudents ="UPDATE students SET name = $1,email = $2 WHERE id =$3 "

module.exports = {
    students,
    getStudentById,
    checkEmailExists,
    addStudents,
    removeStudents,
    getUpdateStudents
}