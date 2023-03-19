import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Error from './Error.js'


function Login({ setAgent }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((agent) => setAgent(agent))
          // ***** When I get my User object back, I can serilize the reviews and bathrooms for this user in the response - set to state then, pass down the user object, user.reviews, user.bathrooms 
          .then(navigate("/"));
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
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
