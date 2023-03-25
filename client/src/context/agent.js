import React, { createContext, useEffect, useState } from "react";


const AgentContext = createContext();


function AgentProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
 
 const [agent, setAgent] = useState()
  // auto-login:
  useEffect(() => {
    console.log("agent in useEffect", agent);

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((agent) => setAgent(agent));
      } else (
        console.log("no user")
      )
    });
  }, []);

 const value = [agent, setAgent]
  return (

    <AgentContext.Provider value={value}>

      {children}

    </AgentContext.Provider>

  )
}

export { AgentContext, AgentProvider };
