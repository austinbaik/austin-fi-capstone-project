import React, { useContext, useState } from "react";
import { AgentContext } from "./context/agent.js"
import AgentOpenCases from "./AgentOpenCases.js";
import { Link, useNavigate } from "react-router-dom";
import AllClosedCases from "./AllClosedCases.js";
import AllUnassignedCases from "./AllUnassignedCases.js";



function AgentHome() {
    const [agent, setAgent] = useContext(AgentContext)
    const navigate = useNavigate();

    console.log("agent state in AgentHome", agent)


    return (

        <div>

            <h2> My Open Cases </h2>
            <AgentOpenCases />

            <h2> All Unassigned Cases </h2>
            <AllUnassignedCases/>

            <h2> <Link to="/home"> All Closed Cases </Link> </h2>

            {/* //link out to All closed cases list */}

        </div>

    )
}


export default AgentHome;