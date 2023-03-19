import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Error from './Error.js'


function Login({ setAgent }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((agent) => setAgent(agent))
          .then(navigate("/home"));
      } else {
       r.json().then((err) => setErrors(err))
      }


    });
  }

  //   function link(){

  //     return(
  //     <Link to={'/alltoilets'} >
  //     <h2> Discover Other Toilets </h2>
  //     </Link>
  // )
  //   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
{/* 
        <div>
          
          <errors>{errors.error}</errors>
          
         </div> */}
      </form>
    </div>
  );
}

export default Login;
