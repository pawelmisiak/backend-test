const express = require('express');
const router = express.Router();
const db = require('../../config/database')
const Student = require('../models/student')


router.get('/', (req,res,next) => {
    Student.findAll()
    .then(student => {
        console.log(student)
      res.status(200).json({student})
    })
    .catch(err => console.log("error", err))
    
    // res.status(200).json({okay:'okay'})

})


router.post('/addStudent', (req,res,next) => {
    const data = {
        firstName:'Martha',
        lastName:'Smith'
    }
    let {firstName,lastName} = data
    firstName = req.body.firstName;
    lastName= req.body.lastName

    Student.create({
        firstName,
        lastName
    })
    .then( student => {
        res.status(200).json(student)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({message: 'Error at addStudent route'})
    })
 
  

})

router.get('/:id', (req,res,next) => {

    res.status(200).json({firstName:'abimael',lastName:'espinal'})


})


router.post('/student', (req,res,next) => {

    res.status(200).json({message:'Added student successfully',student:req.body})


})

router.delete('/:studentId', (req,res,next) => {
    const studentID = req.params.studentId
    Student.destroy({
        where: {
            id:studentID
        }
    }).then(studentID => res.status(200).json(studentID))
    .catch(err => console.log("ERROR:",err))
  
})

//router.patch('/:productId', (req,res,next) => {

router.patch('/student', (req,res,next) => {
  
        res.status(200).json({message:"Edited student sucessfully", student:req.body})
    });


module.exports = router