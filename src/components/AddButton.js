import React from 'react'
import {NavLink} from 'react-router-dom'

const AddButton = ({type, url}) => ( 
    <center>
        <div className="row">
            <NavLink to={url} className="button button-outline column column-60">Add a {type}</NavLink>
        </div>
    </center>
);

export default AddButton