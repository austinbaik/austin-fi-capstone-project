import React, { createContext, useState } from "react";


const CaseContext = createContext();


function CaseProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
 
 const [cases, setCases] = useState()

 const value = [cases, setCases]
  return (

    <CaseContext.Provider value={value}>

      {children}

    </CaseContext.Provider>

  )
}

export { CaseContext, CaseProvider };
