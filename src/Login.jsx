import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const [emailId, setEmailId] = useState("ks123@gmail.com");
  const [password, setPassword] = useState("Komal@123");

  const handleLogin = async() => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId, 
        password
      }, {withCredentials: true});
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset py-2 my-2">
              <label className="label" htmlFor="emailId">Email Id</label>
              <input 
                type="text" 
                value={emailId} 
                id="name" 
                className="input" 
                placeholder="Email Id" 
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset py-2 my-2">
              <label className="label" htmlFor="password">Password</label>
              <input 
                type="password" 
                value={password} 
                id="password" 
                className="input" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login