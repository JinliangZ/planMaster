import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const SignInLink = (props) =>{
    const {profile} = props;
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink to='/create'>New Plan</NavLink>
                </li>
                <li>
                    <a onClick={props.signOut}>Log Out</a>
                </li>            
                <li>
                    <NavLink to='/' className= 'btn btn-floating pink lighten-1'>{profile.initials}</NavLink>
                </li>
            </ul>
        </div>
    )
};

const mapDispatchToState = (dispatch) =>{
    return {
        signOut: () =>dispatch(signOut())
    }
}

export default connect(null,mapDispatchToState)(SignInLink);