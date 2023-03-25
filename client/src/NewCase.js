import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function NewCase() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [customer, setCustomer] = useState("");

    const statuses = ["NEW", "ACTIVE", "CLOSED"]
    const priorities = ["P0", "P1", "P2"]

    console.log(customer);
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/cases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                priority,
                status,
                user_id: 7
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newCase) => console.log("newCase", newCase))
                    .then(navigate("/home"))
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        });
    }


    //call useEffect to only get the customer information! 
    const customers = ["austin", "john", "bob"]
    // const [customers, setCustomers] = useState([]);


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


export default NewCase;
