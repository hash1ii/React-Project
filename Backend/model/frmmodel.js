const mongoose = require('mongoose');


const formSchema = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
})

const form = mongoose.model('form', formSchema);



module.exports = form;