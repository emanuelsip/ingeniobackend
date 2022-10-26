'use strict'
const express = require('express');
const app = express();



//dbmongo

/*
    user: usuarioIngenio
    pass: ingenio123456
*/

const listTaskRoute = require('./apiRoutes/listTask')
app.use('/api',listTaskRoute)


const createRoute = require('./apiRoutes/createTask')
app.use('/api/task',createRoute)


const updateTask = require('./apiRoutes/updateTask')
app.use('/api/task',updateTask)

const editTask = require('./apiRoutes/editTask')
app.use('/api/task',editTask)

const deleteTask = require('./apiRoutes/deleteTask')
app.use('/api/task',deleteTask)

// app.use(express.urlencoded({extended: true})) 
// app.use(express.json()) 

// app.post('/api/registration', function(req,res,next){
//     console.log(req.body.nameTask);
//     res.json(req.body.nameTask)
//   });


app.get('/',(req,res)=>{
    res.end('Api ingenio')
})
app.listen(5000,function(){
    console.log('Prueba del servidor de ingenio');
})