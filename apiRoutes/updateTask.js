const express = require('express')
const router = express.Router()
const taskModel = require('./taskModel')

router.use(express.json())
router.use(express.urlencoded({extended: true}));

router.put('/update', (req, res) => {
  taskModel.findOneAndUpdate({_id:req.body.idTask},{
    nameTask: req.body.nameTask,
    dateTask: req.body.dateTask,
    priorityTask: req.body.priorityTask
  },(err)=>{
     if(!err){
       res.json({"message":"Updated"})
     }else{
       res.json(err)
     }
  })
    
  })

module.exports = router
