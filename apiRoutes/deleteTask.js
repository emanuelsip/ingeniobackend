const express = require('express')
const router = express.Router()
const taskModel = require('./taskModel')

router.use(express.json())
router.use(express.urlencoded({extended: true}));

router.delete('/destroy/:id', (req, res) => {
  taskModel.deleteOne({ _id: req.params.id },function(err){
            if(!err){
              res.json({"message":"Deleted"})
            }else{
              res.status(404).json({"message":"Can't delete, check if exists"})
            }
  })
})

module.exports = router
