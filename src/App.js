import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { Authcontext, FirebaseContext } from './Store/Context';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';

import Post from './Store/postContext';


/**
 * ?  =====Import Components=====
 */

function App() {

  const {setUser} = useContext(Authcontext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{

firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
  })

  return (
    <div>
      
<Post>
  <Router>
  <Route exact path="/" >
    <Home/>
  </Route>
  <Route path="/signup" >
    <Signup/>
  </Route>
  <Route path="/login" >
    <Login />
  </Route>
  <Route path="/create" >
    <Create />
  </Route>
  <Route path="/view" >
    <View />
  </Route>
  </Router>
</Post>
    </div>
  );
}

export default App;
