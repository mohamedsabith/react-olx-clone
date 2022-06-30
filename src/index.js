import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseContext} from './Store/FirebaseContext'
import {db} from './FireBase/config'
import Context from './Store/FirebaseContext'

ReactDOM.render(
<firebaseContext.Provider value={{db}}>
    <Context>
    <App />
    </Context>
</firebaseContext.Provider >
  
  
, document.getElementById('root'));
