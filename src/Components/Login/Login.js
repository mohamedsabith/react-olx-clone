import React,{useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useHistory ,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [userEmail,setUserEmail] = useState()
  const [userPassword,setUserPassword] = useState()
  const [error,setError] = useState('')

  const history = useHistory()

const handleSubmit = (e)=>{
e.preventDefault()
const auth = getAuth()
const email =userEmail
const password = userPassword

signInWithEmailAndPassword(auth,email,password)
.then((cred)=>{
 console.log(cred.user,'user');
 history.push('/')
})
.catch((error)=>{
  console.log(error,'err');
  setError(error.message)

})
}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo"></img>
        <form onSubmit={handleSubmit}>
        <span>{error ? error :''}</span>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={userEmail}
            onChange={(e)=>{setUserEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={userPassword}
            onChange={(e)=>{setUserPassword(e.target.value)}}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        {/* <a>Signup</a> */}
        <Link to='/Signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
