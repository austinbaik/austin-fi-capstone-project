import React, { useContext, useState } from "react";
import { CaseContext } from "./context/CaseContext";
import {
    useParams
} from "react-router-dom";



function EditCase({ thisCase, setIsEditing }) {


    const [cases, setCases] = useContext(CaseContext)

    const [title, setTitle] = useState(thisCase.title);
    const [description, setDescription] = useState(thisCase.description);
    const [priority, setPriority] = useState(thisCase.priority);
    const [status, setStatus] = useState(thisCase.status);
    const [customer, setCustomer] = useState(""); //change to agent! //nesteed assocation in the serializer 

    const statuses = ["NEW", "ACTIVE", "CLOSED"]
    const priorities = ["P0", "P1", "P2"]

    const customers = ["austin", "john"]


    function handleSubmit(e) {
        e.preventDefault();
        // fetch(`/cases/${thisCase.id}/`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({

        //         title: title,
        //         description: description,
        //         priority: priority, 
        //         status: status, 
        // 

        //     }),
        // }).then((r) => {
        //     if (r.ok) {
        //         r.json().then((cases) => setCases(cases)
        //     }

            setIsEditing(false)
        // }
        // )
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
                    {statuses.map(s => {
                        return (
                            <option value={s}> {s} </option>
                        );
                    })}
                </select >

                <label htmlFor="customer">customer</label>
                <select
                    id="dropdown"
                    onChange={(e) => setCustomer(e.target.value)}
                >
                    {customers.map(c => {
                        return (
                            <option value={c}> {c} </option>
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

