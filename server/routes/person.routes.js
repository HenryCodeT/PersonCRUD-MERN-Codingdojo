// //// FIELDS ////////////////////////////////////////////////////
const PersonControler = require('../controllers/person.controller');
console.log("******************* 5-ROUTES **********************");

// //// ROUTES ////////////////////////////////////////////////////

module.exports = (app) => {
    
    // ***** CREATE ******************************************
    app.post('/api/person/new',PersonControler.createPerson);
    
    // ***** READ ********************************************
    app.get('/api',PersonControler.index);
    app.get('/api/people',PersonControler.findAllPeople);
    app.get('/api/person/:id',PersonControler.findPerson);
    
    // ***** UPDATE *******************************************
    app.put('/api/person/:id',PersonControler.updatePerson);

    // ***** DELETE *******************************************
    app.delete('/api/person/:id',PersonControler.deletePerson);
}
console.log("---------------------- 5-ROUTES ---------------------");