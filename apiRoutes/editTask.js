const express = require('express')
const router = express.Router()
const taskModel = require('./taskModel')

router.use(express.json())
router.use(express.urlencoded({extended: true}));
router.post('/edit', (req, res) => {
  taskModel.find({_id:req.body.id},(doc,err)=>{
    if(!err){
      res.json(doc)
    }else{
      res.json(err)
    }
  })
})

module.exports = router
