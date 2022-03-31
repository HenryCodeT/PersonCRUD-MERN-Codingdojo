import React,{useEffect,useState} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () =>{
    const [message, setMessage] = useState("...Lodading");
    useEffect(() => {
      axios.get('http://localhost:8000/api')
      .then(response=>{
          setMessage(response.data.message)
      })
      .catch(err=>console.error(err));
    }, [])
    return(
        <div>
            <h1>Message from the backend: {message}</h1>
            <PersonForm/>
            <hr />
            <PersonList/>
        </div>
    )
    
}
export default Main;