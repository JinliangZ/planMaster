import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';


class SignUp extends Component {
    state = { 
        email: '',
        password: '',
        passwordAgain : '',
        firstname : '',
        lastname : '',
        signUpError: ''
     }

     handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleSubmit =(e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.state.password.localeCompare(this.state.passwordAgain) ? 
        this.setState({
            signUpError : 'password does not match'
        }) :
        this.props.signUp(this.state);        
    };

    render() { 
        const {auth,authError} = this.props;

        if(auth.uid) return <Redirect to ='/' />

        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="passwordAgain">Confirm Password</label>
                        <input type="password" id="passwordAgain" onChange={this.handleChange}/>
                    </div>
                       
                    <div className="input-field">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstname" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastname" onChange={this.handleChange}/>
                    </div>                 

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>

                    <div className="red-text center">
                        {this.state.signUpError}
                    </div>
                </form>
            </div>
         );
    }
};

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth,
        authError : state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);