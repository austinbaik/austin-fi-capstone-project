import React from "react";


const AgentContext = React.createContext();


function AgentProvider({ children }) {
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <AgentContext.Provider value={null}>{children}</AgentContext.Provider>;
  }
  
  export { AgentContext, AgentProvider };
  