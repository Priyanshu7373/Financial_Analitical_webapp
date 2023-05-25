import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './register.css'
const Login = () => {
  // const [name, setName] = useState("");
  // const [initial_balance, setInitial_balance] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let handleform = (e) => {
    e.preventDefault();
    axios.post('/login', { email, password }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      console.log(res);
    })
  }
  return (
    <>
      <div className="App">
        <div class="login">
          <h1 class="heading"> Login</h1>

          <form onSubmit={handleform}>
            {/* <input type="text" id="name" name="name" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} /> */}
            <input type="text" id="email" name="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" id="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            {/* <input type="number" id="initial_balance" name="initial_balance" placeholder="Enter Balance" onChange={(e) => setInitial_balance(e.target.value)} /> */}
            <input type="submit" value="Submit" />
          </form>

        </div>
      </div >
      <div class="bg">
        <div class="mountain">
          <div class="mountain-top">
            <div class="mountain-cap-1"></div>
            <div class="mountain-cap-2"></div>
            <div class="mountain-cap-3"></div>
          </div>
        </div>
        <div class="mountain-two">
          <div class="mountain-top">
            <div class="mountain-cap-1"></div>
            <div class="mountain-cap-2"></div>
            <div class="mountain-cap-3"></div>
          </div>
        </div>
        <div class="mountain-three">
          <div class="mountain-top">
            <div class="mountain-cap-1"></div>
            <div class="mountain-cap-2"></div>
            <div class="mountain-cap-3"></div>
          </div>
        </div>
        <div class="cloud"></div>
      </div>

    </>
  )
}

export default Login;