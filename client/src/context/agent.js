import React, { createContext } from "react";


const AgentContext = createContext();


function AgentProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return (

    <AgentContext.Provider value="walla">

      {children}

    </AgentContext.Provider>

  )
}

export { AgentContext, AgentProvider };
