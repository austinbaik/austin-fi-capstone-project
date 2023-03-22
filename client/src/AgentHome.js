import React, { useContext, useState, useEffect } from "react";
import { AgentContext } from "./context/agent.js"
import { CaseContext } from "./context/CaseContext.js";
import AgentOpenCases from "./AgentOpenCases.js";
import { Link } from "react-router-dom";
import AllUnassignedCases from "./AllUnassignedCases.js";



function AgentHome() {
    const [agent, setAgent] = useContext(AgentContext)
    const [cases, setCases] = useContext(CaseContext)
    console.log("agent state in AgentHome", agent)

    useEffect(() => {
        fetch("/cases").then((r) => {
            if (r.ok) {
                r.json().then((agentCases) => setCases(agentCases));
            }
        });
    }, []);


    if (agent) {

        return (

            <div>

                <h2> My Open Cases: </h2>
                <AgentOpenCases />

                <h2> All Unassigned Cases: </h2>
                <AllUnassignedCases />

                <h2> <Link to="/allclosedcases"> All Closed Cases: </Link> </h2>

            </div>
        )
    }
    else {
        return (
            <div align='center'>
                Please Log-in to Access This Page 
            </div>
        )

    }
}


export default AgentHome;