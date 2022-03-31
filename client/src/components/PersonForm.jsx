import React,{useEffect,useState} from 'react';
import axios from 'axios';

const PersonForm = (props) => {
    
    // //// INITIAL FIELDS ///////////////
    let initialForm = {
        firstName:'',
        lastName:''
    }
    // //// FIELDS ///////////////
    const [person, setPerson] = useState(initialForm);

    // //// SET VALUES ///////////////////////////////
    const handleOnChange = (e) =>{
        setPerson({
            ...person,
            [e.target.name]:e.target.value
        })
    }
    
    // //// POST REQUEST /////////////////////////////
    const handleCreatePerson = (e) =>{
        console.log("********* create person ***********");
        axios.post('http://localhost:8000/api/person/new',person)
            .then(response => console.log("Response: ",response))
            .catch(err => console.log("Error: ", {err}))
        setPerson(initialForm);
    }
    
    return(
        <div className='col-4 mx-auto'>
            <form onSubmit={handleCreatePerson}>
                <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input className="form-control" onChange={handleOnChange} type="text" name="firstName" value={person.firstName} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input className="form-control" onChange={handleOnChange} type="text" name="lastName" value={person.lastName} />
                </div>
                <button className='btn btn-success' type='submit'>Create</button>
            </form>
        </div>
    );

}

export default PersonForm;