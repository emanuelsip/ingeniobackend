'use strict'
const express = require('express');
const app = express();
const cors = require('cors')
let port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.end('Api ingenio')
})
app.listen(port,()=>{
    console.log(`Prueba del servidor de ingenio puert:${port}`);
})
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
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

