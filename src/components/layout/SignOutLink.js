import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLink = () =>{
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to='/signin'>Log In</NavLink>
                </li>            
            </ul>
        </div>
    )
};

export default SignOutLink;