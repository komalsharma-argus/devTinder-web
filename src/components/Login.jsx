import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId, 
        password
        }, {withCredentials: true}
      );
      dispatch(addUser(res.data));
      return navigate("/");
    }catch(err){
      setError(err?.response?.data || err.message);
      // console.error(err?.response?.data || "Something went wrong!!");
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
                id="email" 
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
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;