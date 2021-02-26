//Actions
const CREATEPROJECT = "planmaster/project/CREATE_PROJECT";
const CREATEPROJECTERROR = "planmaster/project/CREATE_PROJECT_ERROR"


//Reducer
const initState ={    projects : [{id: '1', title: 'PROJECTS ARE LOADING', content: 'PROJECTS ARE LOADING'}] };
export default function projectReducer(state = initState, action){
    switch (action.type){
        case CREATEPROJECT :
            console.log('created project', action.project);
            return state;
        case CREATEPROJECTERROR :
            console.log('create project error', action.err);
            return state;
        default: 
            return state;
    }
}

//Action Creators
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
                type: CREATEPROJECT,
                project
            });
        }).catch((err)=>{
            dispatch({type: CREATEPROJECTERROR, err})
        });
    }
}



