import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth , provider } from './firebase';
// import {auth} from "./firebase";
// import firebase from "firebase/app";
import {BrowserRouter , Route , Routes} from "react-router-dom"

import {signInWithPopup} from "firebase/auth"
import { Home } from './Home';

function App() {

  const [credentials , setcredentials] = useState({
    email : "",
    password : ""
  })
  const {path1 ,  setPath1} = useState("/")

 

  const {email , password} = credentials;

  function sign_in(){

    signInWithEmailAndPassword(auth , email , password)
    .then((userCredential)=>{
      console.log(userCredential);
    })
    .catch((error)=>{
      console.log(error);
    })

    }

  const signInwithGoogle = async()=>{
    console.log("came");
    try{
      await signInWithPopup( auth, provider)
      .then((data)=>{ 
        console.log(data);
        localStorage.setItem("email" , data.user.email )
      })
    }catch(e){
      console.log(e)
    }

    setPath1("/Home")
  }

  useEffect(()=>{
    setcredentials(localStorage.getItem("email"))
  })
  

  function sign_out(){

  }

  function createuser(e){
    e.preventDefault();
    //  const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential)
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log( "this is error "+error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    console.log(credentials)
  }


  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path = {path1} exact element = {<Home/>} />
        </Routes>
      
      </BrowserRouter>

      {credentials ? <Home/>:<button onClick={signInwithGoogle}>sign in with google</button>}
      
      <div>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo" alt=" logo" />
        </a>
      </div>
      <h1>Sign In Form</h1>
      <div className="box">
      <div className="card">
        <input type="email" name="email" id="" placeholder='Enter your Email' onChange={(e)=>{credentials.email = e.target.value}} />
        <input type="password" name="password" id="" placeholder='password'   onChange={(e)=>{credentials.password = e.target.value}}/>
        
        <button onClick={ (e) => {createuser(e)}}>
          Create Account
        </button>

      </div>

      <div className="card">
        <input type="email" name="email" id="" placeholder='Enter your Email' onChange={(e)=>{credentials.email = e.target.value}} />
        <input type="password" name="password" id="" placeholder='password'   onChange={(e)=>{credentials.password = e.target.value}}/>
        <div className="btns">
        <button onClick={sign_in()}>
          Sign in
        </button>
         <button onClick={sign_out()}>
          Sign out
        </button>
        </div>
      </div>
        
      </div>
     
     
      <p className="read-the-docs">
        This is dome random text
      </p>
      
    </div>
  )
}

export default App
