import React, { createContext, useState } from "react";


const AgentContext = createContext();


function AgentProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
 
 const [agent, setAgent] = useState()

 const value = [agent, setAgent]
  return (

    <AgentContext.Provider value={value}>

      {children}

    </AgentContext.Provider>

  )
}

export { AgentContext, AgentProvider };
