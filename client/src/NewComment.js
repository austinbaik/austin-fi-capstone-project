import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseContext } from "./context/CaseContext";


function NewComment( {caseId} ) {

    // t.string "comment"
    // t.integer "case_id"
    // t.string "creator_name"
    // t.boolean "is_agent"

    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [cases, setCases] = useContext(CaseContext)

    console.log(caseId)


    //useEffect to async call the comments? 


    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/cases/${caseId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((r) => setCases(r))
                    // .then(navigate("/home"))
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        });
    }

    return (

        <div >
            <form align='center' onSubmit={handleSubmit}>
                <label htmlFor="comment">New Comment</label>
                <input
                    type="text"
                    id="comment"
                    autoComplete="off"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
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

export default NewComment;
