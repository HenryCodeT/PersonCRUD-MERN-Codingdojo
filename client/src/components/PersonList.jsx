import axios from 'axios';
import React,{useState, useEffect} from 'react';


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

    // //// RETURN /////////////////////////////////////////
    return(
        <div>
            {
                people.map((person,index) =>
                    <div key={index}>
                        <p>n°: {index}</p>
                        <h2>Name: {person.firstName}</h2>
                        <h2>lastName: {person.lastName}</h2>
                    </div>
                    )
            }
        </div>
    );
}
export default PersonList;