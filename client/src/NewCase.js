import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseContext } from "./context/CaseContext";
import "./App.css";
import ErrorModal from "./ErrorModal";


// **** PROBLEM: WILL ONLY GET THE USERS WITH ACTIVE CASES - WE ACTUALLY NEED TO DO AN API CALL TO GET ALL THE ACTIVE USERS **** 

function NewCase() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("P0");
    const [status, setStatus] = useState("NEW");
    const [customer, setCustomer] = useState("");
    const [cases, setCases] = useContext(CaseContext)
    const [errors, setErrors] = useState()
    const errorHandler = () => {
        setErrors()
    }

    const statuses = ["NEW", "ACTIVE", "CLOSED"]
    const priorities = ["P0", "P1", "P2"]

    const [users, setUsers] = useState()

    console.log("err", errors);
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
                user_id: `${customer}`,
                assigned: false
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((s) => console.log("s", s))
                    .then(navigate("/home"))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        });
    }

    useEffect(() => {

        fetch("/users").then((r) => {
            if (r.ok) {
                r.json().then((users) => setUsers(users));
            } else (
                console.log("no user")
            )
        });

    }, []);



    //call useEffect to only get the customer information! 
    // const customers = ["austin", "john", "bob"]
    // const [customers, setCustomers] = useState([]);
    //map through this to call up the customer names 

    if (users) {

        console.log("users", users)

        // const customerList = cases.map(c => c.user)  
        // console.log(customerList) 



        // let uniqueObjArray = [...new Map(customerList.map((item) => [item["id"], item])).values()];


        // console.log(uniqueObjArray) 


        return (


            <div style={{ padding: "5px 50px 75px 50px" }}>

                {errors && <ErrorModal message={errors} onClose={errorHandler} />}

                <form align='center' onSubmit={handleSubmit} class="form" >
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
                        <option value="" selected>Please select</option>

                        {users.map(c => {
                            return (
                                <option value={c.id}>  {c.name} </option>
                            );
                        })}

                    </select>

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
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default NewCase;
