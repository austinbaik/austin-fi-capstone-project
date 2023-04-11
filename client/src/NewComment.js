import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseContext } from "./context/CaseContext";
import ErrorModal from "./ErrorModal";


function NewComment( {caseId, setThisCase} ) {

    // t.string "comment"
    // t.integer "case_id"
    // t.string "creator_name"
    // t.boolean "is_agent"

    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [cases, setCases] = useContext(CaseContext)
    const [errors, setErrors] = useState();

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
                r.json().then((r) => setThisCase(r))
                setComment("")
                    // .then(navigate("/home"))
            } else {
                r.json().then((err) => setErrors(err))
            }
        });
    }
console.log("err", errors);
    const errorHandler = () => {
        setErrors()
      }
    
    return (

        <div >
      { errors && <ErrorModal  message={errors} onClose={errorHandler} /> } 


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
