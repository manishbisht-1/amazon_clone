import React,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./Firebase"


function App() {
   const [{user},dispatch]=useStateValue();

// useEffect powerful
// piece of code which rruns based on a given condition
   useEffect(() => {
      const unsubscribe= auth.onAuthStateChanged((authUser)=>{
         if(authUser){
            // the user is logged in
         dispatch({
            type:"SET_USER",
            user: authUser
         })
         }else{
            // the user is logged out
            dispatch({
               type:"SET_USER",
               user:null
            })
         }
      })
return ()=>{
   // Any cleanup opeartions go in here.
   unsubscribe();
}

   }, [])

   console.log("user is >> ",user)
  return(
  <Router>
   <div className="app"></div>
   <Switch>
<Route path="/checkout">
<Header/>
<Checkout />
</Route>
<Route path="/login">
<Login/>
</Route>
<Route path="payment"><h2></h2>payment</Route>
<Route path="/">
<Header/>
<Home/>
</Route>
   </Switch>   
</Router>
)
}
export default App;

