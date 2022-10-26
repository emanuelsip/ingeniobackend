const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usuarioIngenio:ingenio123456@cluster0.nk7kxmb.mongodb.net/?retryWrites=true&w=majority');

const testConnection = mongoose.connection;

const taskDB = mongoose.model('taskDB', { name: String });


testConnection.on('connected', ()=>{console.log('Connection succesful');});
testConnection.on('error', ()=>{console.log('Can`t connect to db');});



module.exports = mongoose