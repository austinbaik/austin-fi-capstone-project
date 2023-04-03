import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseContext } from "./context/CaseContext"; 
import "./App.css";

function NewCase() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [customer, setCustomer] = useState("");
    const [cases, setCases] = useContext(CaseContext)

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
                r.json().then((s) => console.log("s", s))
                    .then(navigate("/home"))
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        });
    }


    //call useEffect to only get the customer information! 
    // const customers = ["austin", "john", "bob"]
    // const [customers, setCustomers] = useState([]);
        //map through this to call up the customer names 

    if (cases) {

        const customerList = cases.map(c => c.user)  
        console.log(customerList) 
        


        let uniqueObjArray = [...new Map(customerList.map((item) => [item["id"], item])).values()];


        console.log(uniqueObjArray) 


              return (


        <div >
            <form align='center' onSubmit={handleSubmit} class="form">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    size="50"
                    autoComplete="off"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="priority">Priority</label>
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
                <label htmlFor="status">Status</label>
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

                <label htmlFor="customer">Customer</label>
                <select
                    id="dropdown"
                    onChange={(e) => setCustomer(e.target.value)}
                >
                    {uniqueObjArray.map(c => {
                        return (
                            <option value={c.id}> {c.name} </option>
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
}else {
    return(
        <div>
            Loading...
        </div>
    )
}
} 

export default NewCase;
