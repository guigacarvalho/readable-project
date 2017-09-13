import React from 'react'
import {NavLink} from 'react-router-dom'

const ButtonAddPost = () => ( 
    <NavLink to="/create" className="button button-clear">Add a Post</NavLink>
);

export default ButtonAddPost