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

let port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.end('Api ingenio')
})
app.listen(port,()=>{
    console.log(`Prueba del servidor de ingenio puert:${port}`);
})