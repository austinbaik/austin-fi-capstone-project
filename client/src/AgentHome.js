import React, { useContext, useState } from "react";
import { AgentContext } from "./context/agent.js"


function AgentHome() {
    const [agent, setAgent] = useContext(AgentContext)

    console.log("agent state in AgentHome", agent)


    return (
        <div>


            <h2> My Open Cases </h2>

            <h2> All Unassigned Cases </h2>


            <h2> All Closed Cases </h2>

            {/* //link out to All closed cases list */}

        </div>




    )


}


export default AgentHome;