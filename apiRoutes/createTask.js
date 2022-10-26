const express = require('express')
const router = express.Router()
const taskModel = require('./taskModel')

router.use(express.json())
router.use(express.urlencoded({extended: true}));

router.post('/create', (req, res) => {

        const newTask = new taskModel({
                          nameTask: req.body.nameTask,
                          dateTask: req.body.dateTask,
                          priorityTask: req.body.priorityTask,
                        })
          newTask.save(function(err){
            if(!err){
              res.json({
                "name": req.body.nameTask,
                "dueDate": req.body.dateTask,
                "priority": req.body.priorityTask,
                "id": newTask._id,
                "createdAt": newTask.createdAt,
                "updatedAt": newTask.updatedAt
                })
            }else{
              res.json(err.errors['nameTask'].message)
            }
        
          })
  })

module.exports = router
