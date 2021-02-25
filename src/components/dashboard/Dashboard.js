import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import ProjectList from '../projects/ProjectList'
import MyTime from './Clock';



class Dashboard extends Component {
    state = {  }
    render() { 
        const {projects,auth} = this.props;

        if(!auth.uid) return <Redirect to ='/signin' />

        return ( 
           <div className="dashboard container">
               <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects = {projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <MyTime />
                    </div>
               </div>
           </div>
         );
    }
}
 

const mapStateToProps = (state) =>{
    //console.log(state)
    return {
        projects: state.firestore.ordered.projects||state.project.projects,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps),
                      firestoreConnect(props =>[
                          {collection: 'projects'}
                      ])
)(Dashboard);