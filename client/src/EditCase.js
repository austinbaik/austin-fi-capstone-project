import React, { useContext, useState, useEffect } from "react";
import { CaseContext } from "./context/CaseContext";
import {
    useParams
} from "react-router-dom";



function EditCase({ thisCase, setThisCase, setIsEditing }) {


    const [cases, setCases] = useContext(CaseContext)

    const [title, setTitle] = useState(thisCase.title);
    const [description, setDescription] = useState(thisCase.description);
    const [priority, setPriority] = useState(thisCase.priority);
    const [status, setStatus] = useState(thisCase.status);
    const [AgentChange, setAgentChange] = useState() // AgentChange = agent's Id 
    const [agentList, setAgentList] = useState([])

    const statuses = ["NEW", "ACTIVE", "CLOSED"]
    const priorities = ["P0", "P1", "P2"]

    console.log("p", priority)

    //Fetches ALL agent objects, returns agent objects as an array  
    useEffect(() => {

        fetch("/agents").then((r) => {
            if (r.ok) {
                r.json().then((agent) => setAgentList(agent));
            } else (
                console.log("no user")
            )
        });
    }, []);

    console.log("array agents", agentList);
    console.log("AgentChange", AgentChange);


    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/cases/${thisCase.id}/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: thisCase.id,
                title: title,
                description: description,
                priority: priority,
                status: status,
                new_agent: AgentChange
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedCase) => handleUpdate(updatedCase))
            } else { console.log(r.errors) }

            setIsEditing(false)
        }
        )
    }

    function handleUpdate(updatedCase) {
        console.log("updatedCase", updatedCase)
        setThisCase(updatedCase)
        let updatedCases = cases.map(c => {
            if (c.id === updatedCase.id) {
                return updatedCase.id
            } else {
                return c
            }
        })
        setCases(updatedCases)
    }


    return (

        <div >
            <form align='center' onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br></br>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    size="50"
                    autoComplete="off"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="priority">priority</label>
                <select
                    id="dropdown"

                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option >Please select</option>
                    {priorities.map(p => {
                        return (
                            <option value={p}> {p} </option>
                        );
                    })}
                </select >
                <label htmlFor="status">status</label>
                <select
                    id="dropdown"
                    onChange={(e) => setStatus(e.target.value)}
                >

                    <option value="" selected>Please select</option>

                    {statuses.map(s => {
                        return (
                            <option value={s}> {s} </option>
                        );
                    })}
                </select >

                <label htmlFor="agents">Change Agent</label>
                <select
                    id="dropdown"
                    onChange={(e) => setAgentChange(e.target.value)}
                >
                    <option value="" selected>Please select</option>

                    {agentList.map(a => {
                        return (
                            <option value={a.id}> {a.name} </option>
                        );
                    })}
                </select >

                <button type="submit">Submit</button>

                {/* <div>
                    {errors.map((err) => (
                        <Error key={err} err={err} />
                    )
                    )}
                </div> */}
            </form>
        </div>

    )
}


export default EditCase

