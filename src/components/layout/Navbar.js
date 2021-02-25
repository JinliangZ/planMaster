import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const Navbar = (props) =>{
    const {auth, profile} = props;
    // console.log(auth)
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to= '/' className='brand-logo'>PlanMaster</Link>
                {!!auth.uid && <SignInLink profile={profile}/>}
                {!!auth.uid || <SignOutLink />}
            </div>
        </nav>
    )
};

const mapStateToProps = (state) =>{
    //console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);