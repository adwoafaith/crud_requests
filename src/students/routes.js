const {Router} = require('express');
const controller = require ('./controller'); 

const router = Router();

router.get('/',controller.getStudents);
router.get('/:id',controller.getStudentById);
router.post('/',controller.addStudents);
router.delete('/:id',controller.removeStudents);
router.put('/:id',controller.getUpdateStudents)

// localhost:3000/api/vi/students/2

module.exports = router;