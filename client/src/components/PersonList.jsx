import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const PersonList = () => {
    // //// FIELDS ///////////////////////////////////////////
    const [people, setPeople] = useState([]);

    // //// API AXIOS GET ////////////////////////////////////
    const getAllPeopleFromAPI = async () =>{
        try {
            const response = await axios.get('http://localhost:8000/api/people')
            console.log("Response: ",response);
            setPeople(response.data.people)
        } catch (error) {
            console.log("Error: ",{error});
        }
    }
    // //// SET DATA ////////////////////////////////////////
    useEffect(  () => {
        console.log("*** USE-EFFECT-PERSON ***");
        console.log(getAllPeopleFromAPI()); 
    }, [])
    // //// DELETE ////////////////////////////////////////
    const deletePerson =  async (personId) => {
        try {
            const response = await axios.delete('http://localhost:8000/api/person/' + personId)
            console.log("Response: ",response.statusText );
            
            const filterPersonList = people.filter((person)=> person._id !== personId)
            setPeople(filterPersonList);
        } catch (error) {
            console.log("Error: ",error);
        }
        
    }

    // //// RETURN /////////////////////////////////////////
    return(
        <div>
            {
                people.map((person,index) =>
                    <div key={index}>
                        <Link to={`/${person._id}`}>
                            <h2>{person.lastName}, {person.firstName}</h2>
                        </Link>    
                        <button className='btn btn-danger' onClick={(e)=>{deletePerson(person._id)}}>
                            Delete
                        </button>                  
                    </div>
                )
            }
        </div>
    );
}
export default PersonList;