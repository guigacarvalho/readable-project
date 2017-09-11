import React from 'react'
import {NavLink} from 'react-router-dom'

const AddPostButton = () => ( 
    <NavLink to="/create" className="button button-clear    ">Add a Post</NavLink>
);

export default AddPostButton