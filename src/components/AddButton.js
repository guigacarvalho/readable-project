import React from 'react'
import {NavLink} from 'react-router-dom'

const AddButton = ({type, url}) => ( 
    <center>
            <NavLink to={url} className="button button-outline column">Add a {type}</NavLink>
    </center>
);

export default AddButton