import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () =>{
    return(
        <div className='navbar navbar-dark bg-dark'>
            <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Home</Link>
            </div>
        </div>
    );
}
export default NavigationBar;