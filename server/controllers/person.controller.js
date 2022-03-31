// //// FIELDS /////////////////////////////////////////////
const Person = require('../models/person.models')
console.log("*************** 4-Controler ****************");

// //// CONTROLLERS ////////////////////////////////////////

/**
 * Index Hello World
 * @param {*} request 
 * @param {*} response 
 */
const index = (request, response) =>{
    console.log("controller-index");
    response.json({message:"Hello World"})
}
/**
 * Create a new person
 * @param {*} request 
 * @param {*} response 
 */
const createPerson = (request,response) =>{
    console.log("controller-createPerson");
    console.log("request-body ",request.body);
    Person.create(request.body)
        .then(person => {
            response.statusMessage = 'created success'
            response.status(200).json({person})
        })
        .catch(err => {
            response.statusMessage = 'Something went wrong'
            response.status(400).json({  error: err })
        })
}
/**
 * Find all people in the db
 * @param {*} request 
 * @param {*} response 
 */
const findAllPeople = (request, response) => {
    console.log("controller-find-all-people");
    Person.find()
        .then(people => {
            response.statusMessage = 'Retrieve people success'
            response.status(200).json({people})
        })
        .catch(err => {
            response.statusMessage = 'Something went wrong'
            response.status(400).json({err})
        })
}
/**
 * Get by id and update
 * @param {*} request 
 * @param {*} response 
 */
const updatePerson = (request, response) => {
    console.log("Controller-update-person");
    Person.findByIdAndUpdate(request.params.id, request.body, {new:true,runValidators:true})
        .then(updatePerson=>{
            response.statusMessage = 'Updated Person'
            response.status(200).json({person:updatePerson})
        })
        .catch(err=>{
            response.statusMessage = 'Something went Wrong'
            response.status(400).json({error:err})
        })
}

/**
 * Find person by Id
 * @param {*} request 
 * @param {*} response 
 */
const findPerson = (request, response) =>{
    console.log("Controller-retrieve-person");
    Person.findById(request.params.id)
        .then(person => {
            response.statusMessage = 'Person Found'
            response.status(200).json({person})
        })
        .catch(err=>{
            response.statusMessage = 'Something Went Wrong'
            response.status(200).json({error:err})
        })
}
/**
 * Delete a person by id
 * @param {*} request 
 * @param {*} response 
 */
const deletePerson = (request,response) => {
    console.log("Controller-Delete-Person");
    Person.findByIdAndDelete(request.params.id)
        .then(()=>response.status(204).end())
        .catch(err=>response.status(400).end())
}

module.exports = {
    index,
    createPerson,
    findAllPeople,
    updatePerson,
    findPerson,
    deletePerson
}
console.log("--------------- 4-Controler ------------------");
