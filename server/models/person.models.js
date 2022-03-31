// //// FIELDS //////////////////////////////////////////////
const mongoose = require('mongoose');
console.log('***************** 3-Models *****************');

// //// SCHEMAS /////////////////////////////////////////////
const PersonSchema = new mongoose.Schema({
    firstName : { type:String },
    lastName : { type:String }
},{timestamps:true});

// //// MODELS ///////////////////////////////////////////////
const Person = mongoose.model('person',PersonSchema);

// **** EXPORTS **********************************************
console.log('------------------ 3-Models --------------------');
module.exports = Person;