import logo from './logo.svg';
import React, { useContext, useState } from "react";
import './App.css';
import {AgentContext} from "./context/agent.js"

import Landing from './Landing'

function App() {

const [hello, setHello] = useState("hello")

  const value = useContext(AgentContext)

console.log( value ) 

  return (
    <div>
    Testing...

    {value}


    

    <Landing hello={hello}/>

    </div> 
  );
}

export default App;


//adding a github change 


// validate :must_have_flatiron_email

// def must_have_flatiron_email
//   unless email.match?(/flatironschool.com/)
//     errors.add(:email, "We're only allowed to have people who work for the company in the database!")
//   end
// end