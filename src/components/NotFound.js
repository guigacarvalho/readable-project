import React from 'react'
import emoji from 'react-easy-emoji'
import {NavLink} from 'react-router-dom'

const NotFound = () => ( 
    <center>
        <br/>
        <h1>{emoji('🙈') }</h1>
        <h2>404 Not Found</h2>
        <div>Sorry, nothing to see here..</div>
        <NavLink to="/" className="button button-small button-clear column">Go home</NavLink>
        <NavLink to="/create" className="button button-small button-clear column">Add a post</NavLink>
    </center>
)

export default NotFound