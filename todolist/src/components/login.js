import React from 'react'
import { useState } from 'react';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
    <center>
    <h1>welcome to login</h1><br/>
    <form action=''>
    <input type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
    <button type='submit'>Login</button>
    </form>
    </center>
    </div>
  );
}

export default Login;
