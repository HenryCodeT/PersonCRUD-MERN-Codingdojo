import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PersonUpdate = (props) => {
    // ///// FIELDS ////////////////////////////////
    // console.log(props);
    const {id} = props.match.params 
    // const id = props.match.id;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // ///// API GET PERSON ////////////////////////
    const getPersonByID = async (id) =>{
        try {
            const response = await axios.get(`http://localhost:8000/api/person/${id}`)
            console.log("Response",response);
            setFirstName(response.data.person.firstName)
            setLastName(response.data.person.lastName)
        } catch (error) {
            console.log("Error",{error});
        }
    }
    // ///// USE EFFECT TO SET PERSON //////////////
    useEffect(() => {
        getPersonByID ( id );
    }, [])
    // //// UPDATE PERSON //////////////////////////
    const handleUpdatePerson = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/api/person/${id}`,{firstName,lastName})
            console.log("Response",response);
        } catch (error) {
            console.log("Error",{error});
        }
    }

    return(
        <div>
            <h1>Update Person</h1>
            <form className='' onSubmit={handleUpdatePerson}>
                <div className='col-3 mx-auto align-items-center row form-group m-2'>
                    <label className='col form-label' htmlFor="firstName">First Name:</label>
                    <input className='col form-control' type="text" name='firstName' onChange={(e)=> {setFirstName(e.target.value)}} value={firstName} />
                </div>
                <div className='col-3 mx-auto align-items-center row form-group m-2'>
                    <label className='col form-label' htmlFor="lastName">Last Name:</label>
                    <input className='col form-control' type="text" name='lastName' onChange={(e)=> {setLastName(e.target.value)}}  value={lastName} />
                </div>
                <button className='btn btn-success' type='submit'>Submit</button>
            </form>
        </div>
    );
}
export default PersonUpdate;