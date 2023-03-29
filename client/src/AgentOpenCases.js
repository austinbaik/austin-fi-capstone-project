import React, { useContext, useState } from "react";
import {
    Link,
} from "react-router-dom";
import { CaseContext } from "./context/CaseContext";
import { AgentContext } from "./context/agent";

//component lists the cases assigned to the agent 
// import CurrentCase from "./CurrentCase";

function AgentOpenCases() {


    const [cases, setCases] = useContext(CaseContext)
    const [agent, setAgent] = useContext(AgentContext)
    // const [agentCases, setAgentCases] = useState([])


    // .filter through the 'cases' array for cases owned by the agent -> maps through that array. 

    // let agentCases = [] //map through this array 
    console.log("agent in aoc", agent.id)
    // let myCases = cases.filter(c => c.agent_cases == agent.id)
    // console.log("myCases", myCases)
        

    


    if (cases) {

       let myCases = cases.filter(c => c.agent_cases == agent.id);
        console.log("myCases", myCases)
        
        return (
            <>
                <table>
                    <thead align='left'>
                        <tr>
                            <th >Title</th>
                            <th >Description</th>
                            <th >Priority</th>
                            <th >Status</th>
                        </tr>
                    </thead>
                    <tbody align='left'>
                        {myCases.map(c => {
                            return (
                                
                                <Link to={'/currentcase/' + c.id} >
                                    <tr key={c.id}>
                                        <td>{c.title}</td>
                                        <td>{c.description}</td>
                                        <td>{c.priority}</td>
                                        <td>{c.status}</td>
                                    </tr>
                                    <br></br>
                                </Link>
                                
                                
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <div> Loading... </div>
        )
    }

}

export default AgentOpenCases;


