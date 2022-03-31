import React,{useEffect,useState} from 'react';
import axios from 'axios';
import PersonForm from './PersonForm';
import PersonList from './PersonList';

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
            <PersonList/>
        </div>
    )
    
}
export default Main;