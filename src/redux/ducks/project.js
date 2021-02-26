//Actions
const CREATE_PROJECT = "planmaster/project/CREATE_PROJECT";
const CREATE_PROJECT_ERROR = "planmaster/project/CREATE_PROJECT_ERROR"


//Reducer
const initState ={    projects : [{id: '1', title: 'PROJECTS ARE LOADING', content: 'PROJECTS ARE LOADING'}] };
export default function projectReducer(state = initState, action){
    switch (action.type){
        case CREATE_PROJECT :
            console.log('created project', action.project);
            return state;
        case CREATE_PROJECT_ERROR :
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
                type: CREATE_PROJECT,
                project
            });
        }).catch((err)=>{
            dispatch({type: CREATE_PROJECT_ERROR, err})
        });
    }
}



