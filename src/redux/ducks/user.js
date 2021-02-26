//Actions
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGIN_SUCCESS="LOGIN_SUCCESS";
const SIGNOUT_SUCCESS="SIGNOUT_SUCCESS";
const SIGNUP_SUCCESS="SIGNUP_SUCCESS";
const SIGNUP_ERROR="SIGNUP_ERROR";

//Reducer
const initState ={
    authError: null
};

export default function authReducer(state = initState, action){
    switch(action.type){
        case  LOGIN_ERROR:
            console.log('login error');
            return {
                ...state,
                authError: 'login failed'
            }
        case  LOGIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                authError:null
            }

        case  SIGNOUT_SUCCESS:
            console.log('signout success')
            return state
        
        case SIGNUP_SUCCESS :
            console.log('signup success');
            return {
                ...state,
                authError : null
            }
        
        case SIGNUP_ERROR :
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        
        default:
            return state  


    } 
}

//Action Creators
export const signIn = (credentials) =>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email, 
            credentials.password
            ).then(() => {
                    // Signed in
                   dispatch({
                       type: LOGIN_SUCCESS
                   })
                }).catch((err) => {
                    dispatch({
                        type: LOGIN_ERROR,  err
                    })
                });

    }
};

export const signOut = () =>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({
                type: SIGNOUT_SUCCESS
            })
        }).catch(()=>{

        })
    }
};


export const signUp = (newUser) =>{
    return (dispatch,getState,{getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, 
            newUser.password
            ).then((res)=>{
                return firestore.collection('users').doc(res.user.uid).set({
                     firstName: newUser.firstname,
                     lastName: newUser.lastname,
                     initials: newUser.firstname[0] + newUser.lastname[0]
                })
            }).then(()=>{
                dispatch({
                    type: SIGNUP_SUCCESS
                })
            }).catch(err=>{
                dispatch({
                    type: SIGNUP_ERROR , err
                })
            })
    }
};