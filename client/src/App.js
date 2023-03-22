import React, { useContext, useEffect } from "react";
import './App.css';
import { AgentContext } from "./context/agent.js"
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import NavBar from './NavBar';
import AgentHome from './AgentHome';
import Landing from './Landing';
import NewCase from './NewCase';
import CurrentCase from './CurrentCase';

function App() {

  const [agent, setAgent] = useContext(AgentContext)
  // const [agent, setAgent] = useState();


  // auto-login:
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((agent) => setAgent(agent));
      } else (
        console.log("no user")
      )
    });
  }, []);




  return (
    <div >
      <NavBar agent={agent} setAgent={setAgent} />
      <main>

        <Routes>
          <Route path="/" element={<Landing agent={agent} />} />
          <Route path="/signup" element={<SignUp setAgent={setAgent} />} />
          <Route path="/login" element={<Login setAgent={setAgent} />} />
          <Route path="/home" element={<AgentHome agent={agent} />} />
          <Route path="/newcase" element={<NewCase/>} />
          <Route path="/currentcase/:id" element={<CurrentCase/>} />

        </Routes>

      </main>
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