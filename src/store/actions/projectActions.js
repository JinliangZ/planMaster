export const createProject = (project) => {
    return (dispatch, getState, { getFirebase })=>{
        //halt dispatch
        //make async call to database 
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
      
        //async
        firestore.collection('projects').doc().set({
            ...project,
            authorFirstName: profile.firstName,
            authorLasttName: profile.lastName,
            authorID: authorId,
            createdAt: new Date()
        }).then(()=>{
            //carry on dispatch as normal
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR", err})
        });
    }
}
