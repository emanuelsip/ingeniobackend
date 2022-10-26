const express = require('express')
const router = express.Router()

 const taskModel = require('./taskModel')
router.get('/task/:duet?', (req, res) => {
  const filters = (req.params.duet?{dateTask : { $gte : "2012-11-28T00:00:00Z" }}:{})
  taskModel.find(filters,(doc,err)=>{
    if(!err){
      res.json(doc)
    }else{
      res.json(err)
    }
  })
})


module.exports = router

