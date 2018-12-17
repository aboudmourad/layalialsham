import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import reducers from "./store/reducer/rootReducer"
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from "./server/fbConfig"

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }), logger),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig ,{ attachAuthIsReady: true ,useFirestoreForProfile: true})
             )
         );
    store.firebaseAuthIsReady.then(()=>{
        ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
            serviceWorker.unregister();
    })