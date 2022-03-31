// //// FIELDS ////////////////////////////////////////////////////
const PersonControler = require('../controllers/person.controller');
console.log("******************* 5-ROUTES **********************");

// //// ROUTES ////////////////////////////////////////////////////

module.exports = (app) => {
    app.get("/api",PersonControler.index);
    app.post('/api/person/new',PersonControler.createPerson);
    app.get("/api/people",PersonControler.findAllPeople);
}
console.log("---------------------- 5-ROUTES ---------------------");