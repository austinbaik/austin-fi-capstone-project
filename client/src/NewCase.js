import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function NewCase() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [customer, setCustomer] = useState("");

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
                user_id: customer
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

    return (

        <div>
            <form onSubmit={handleSubmit}>
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
                    autoComplete="off"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="priority">priority</label>
                <input
                    type="text"
                    id="priority"
                    autoComplete="off"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                />
                <label htmlFor="status">status</label>
                <input
                    type="text"
                    id="status"
                    autoComplete="off"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />

                <label htmlFor="customer">customer</label>
                <input
                    type="text"
                    id="customer"
                    autoComplete="off"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                />
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
