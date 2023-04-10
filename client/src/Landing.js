import React, { useContext } from "react";
import { AgentContext } from "./context/agent.js"
import { Link, useNavigate } from "react-router-dom";


function Landing() {
  const navigate = useNavigate();
  const [agent, setAgent] = useContext(AgentContext)


  if (agent) {

    return (
      <div>{navigate("/home")}</div>
    )

  } else {

    return (

      <div align='center'>

        <h2> Customer Log-in </h2>
        <h3> Customer Sign-up </h3>

        <button type="button" style={{ width: 400 }} >
          <Link to="/login">   Agent Log-in   </Link>
        </button>
        <br></br>
        <button style={{ width: 400 }}>
          <Link to="/signup">Create Agent Account</Link>
        </button>

      </div>

    )
  }
}

export default Landing; 