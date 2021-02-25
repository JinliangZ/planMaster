import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, createFirestoreInstance } from "redux-firestore";
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from './config/fbConfig';


const createStoreWithFirebase = compose(
  reduxFirestore(firebase)
)(createStore);

const store = createStoreWithFirebase(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase}))
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig ,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

function AuthIsLoaded({children}){
  const auth = useSelector(state=>state.firebase.auth);
  if( !isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
         <App />
        </AuthIsLoaded>        
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
