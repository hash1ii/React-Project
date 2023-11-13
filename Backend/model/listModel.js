const mongoose = require('mongoose');


const connect = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
})

const list = mongoose.model('list', connect);



module.exports = list;