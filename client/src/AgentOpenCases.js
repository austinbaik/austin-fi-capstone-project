import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//component lists the cases assigned to the agent 

function AgentOpenCases() {


    const [agentCases, setAgentCases] = useState([])

    useEffect(() => {
        fetch("/cases").then((r) => {
            if (r.ok) {
                r.json().then((agentCases) => setAgentCases(agentCases));
            }
        });
    }, []);



    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {agentCases.map(item => {
                        return (
                            <Link to="/login">
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.status}</td>
                                </tr>
                            </Link>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AgentOpenCases;


