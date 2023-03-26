import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function NewComment( {caseId} ) {

    // t.string "comment"
    // t.integer "case_id"
    // t.string "creator_name"
    // t.boolean "is_agent"

    const navigate = useNavigate();
    const [comment, setComment] = useState("");

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
                r.json().then((comment) => console.log("comment", comment))
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
