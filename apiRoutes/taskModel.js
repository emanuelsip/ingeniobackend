const connectionDB = require('../conexionDB/dbConnection');
const mongoose = require('mongoose')

const schemaModel = mongoose.Schema
const taskSchema = new schemaModel(
{
    nameTask: { type:String, required: true },
    dateTask: { type:Date, required: true },
    priorityTask: { type:String, required: true },
},
{
timestamps: true
})

// const taskModel = mongoose.model('tasksms',taskSchema)

module.exports = mongoose.model('tasksms',taskSchema)
