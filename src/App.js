import React, { useContext, useEffect } from 'react';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Post from './Store/PostContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import {AuthContext,firebaseContext} from './Store/FirebaseContext'
function App() {
  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(firebaseContext)
  useEffect(()=>{
  const auth = getAuth(firebase);
onAuthStateChanged(auth, user => {
 setUser(user)
});
  
  })
  return (
    <div>
<Post>
      <Router >
        <Route exact path='/'>
        <Home />
        </Route>
        <Route  path='/signup'>
        <Signup  />
        </Route>
        <Route  path='/login'>
        <Login  />
        </Route>
        <Route  path='/create'>
        <Create/>
        </Route>
        <Route  path='/view'>
        <ViewPost/>
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
