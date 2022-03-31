import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PersonShow = (props) => {
    
    // //// FIELDS //////////////////////////////////
    console.log(props.match.params);
    let {personId} = props.match.params

    // //// USE STATE FIELDS ////////////////////////
    const [person, setPerson] = useState('');

    // //// API GET PERSON /////////////////////////
    const getPersonById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/person/${id}`)
            console.log("Response: ",response);
            setPerson(response.data.person)
        } catch (error) {
            console.log("Error: ",{error});
        }
    }
    
    // //// USE EFFECT TO GET PERSON ////////////////
    useEffect(() => {
        getPersonById(personId);
    }, [])

    return(
        <div>
            <h1>{person.firstName}</h1>
            <h2>{person.lastName}</h2>
            <Link className='btn btn-warning' to={`/person/${person._id}/edit`}>
                Edit
            </Link>
        </div>
    );
}
export default PersonShow;