import React, { useContext } from "react";
import {
    Link,
} from "react-router-dom";
import { CaseContext } from "./context/CaseContext";

//component lists the cases assigned to the agent 
// import CurrentCase from "./CurrentCase";

function AgentOpenCases() {


    const [cases, setCases] = useContext(CaseContext)

    // .filter through the 'cases' array for cases owned by the agent -> maps through that array. 

    // let agentCases = [] //map through this array 

    if (cases) {
        return (
            <>
                <table>
                    <thead align='left'>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody align='left'>
                        {cases.map(c => {
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


