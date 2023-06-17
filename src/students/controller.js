const { query } = require('express');
const pool = require('../../db');
const queries = require('./queries')

const getStudents = (req, res) => {
   pool.query(queries.students, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows)
   });
}
//getting students by id
const getStudentById = (req, res) => {
   const id = parseInt(req.params.id);
   pool.query(queries.getStudentById, [id], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
      console.log(results)
   })
}
//adding students
//we check if an email already exists in the database
//if it does we don't wonna add it
const addStudents = (req, res) => {
   const { name, email, age, dob } = req.body;
   //check if email exists
   pool.query(queries.checkEmailExists, [email], (error, results) => {
      if (results.rows.length) {
         res.send(`email already exists`)
      }
      //add student to database
      pool.query(queries.addStudents, [name, email, age, dob], (error, results) => {
         if (error) throw error;
         res.status(201).send('students created sucessfully');


      });

   })
};

//delete logic


const removeStudents = (req, res) => {
   const id = parseInt(req.params.id);

   //getting student by id first
   pool.query(queries.getStudentById, [id], (error, results) => {
      if (results.rows.length < 1) {
         res.send(`no students with this id  exists`);
      } else {
         pool.query(queries.removeStudents, [id], (error, results) => {
            console.log(results)
            if (error) throw error;
            res.status(200).send(`user with id successfully deleted`);
         });
      }
   });

};

//updating the database
const getUpdateStudents = (req, res) =>{
   const id = parseInt(req.params.id)
   const {name,email} = req.body
   pool.query(queries.getStudentById,[id],(error,results)=>{
      if (results.rows.length < 1){ 
         res.send(`no student with this`)
      }

      pool.query(queries.getUpdateStudents,[name,email,id],(error,results)=>{
         if (error) throw error
         res.status(200).send("student updated sucessfully")
      })
   })
}

// SELECT * FROM students WHERE id = 11

module.exports = {
   getStudents,
   getStudentById,
   //checkEmailExists,
   addStudents,
   removeStudents,
   getUpdateStudents, 

}