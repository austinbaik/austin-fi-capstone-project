
import React, { useContext, useState } from "react";
import { CaseContext } from "./context/CaseContext";
import {
    useParams
} from "react-router-dom";
import EditCase from "./EditCase";
import NewComment from "./NewComment";
import CommentCard from "./CommentCard";
//need to be able to EDIT and DELETE this case (CRUD) 
// NEED TO MAP ALL THE COMMENTS!!!! 

function CurrentCase() {

    let { id } = useParams();
    //take the id and match to the object from context and render 
    const [cases, setCases] = useContext(CaseContext)
    const [isEditing, setIsEditing] = useState(false);

    console.log("id", id)
    console.log("cases", cases)

    const thisCase = cases.find(c => c.id == id)
    console.log("thisCase", thisCase)


    const handleDeleteClick = (e) => {
        e.preventDefault();
        fetch(`/cases/${thisCase.id}`, {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                r.json().then((cases) => setCases(cases, "delete"))
            } else {
                r.json().then((err) => console.log(err))
            }
        }
        )
    }



    const handleTakeCase = (e) => {
        e.preventDefault();
        fetch("/agent_cases/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((cases) => setCases(cases))
            } else {
                r.json().then((err) => console.log(err))
            }
        }
        )
    }

    if (thisCase) {
        return (
            <>
                <h1>{thisCase.title}</h1>


                <h3>Case Description:</h3>
                {thisCase.description}
                <h3>Case Status:</h3>
                {thisCase.status}
                <h3>Case Priority:</h3>
                {thisCase.priority}

                {/* <tr key={thisCase.id}>
                <td></td>
                <td>{thisCase.description}</td>
                <td>{thisCase.priority}</td>
                <td>{thisCase.status}</td>
            </tr> */}


                {thisCase.assigned ? (
                    <div>
                        <br></br>
                        <button onClick={handleDeleteClick}>
                            <span role="img" aria-label="delete">
                                🗑
                            </span>
                        </button>

                        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                            <span role="img" aria-label="edit">
                                ✏️
                            </span>
                        </button>
                    </div>) :

                    <button onClick={handleTakeCase}>
                        <span role="img" aria-label="take">
                            Claim
                        </span>
                    </button>
                }

                {isEditing ? (
                    <EditCase thisCase={thisCase} setIsEditing={setIsEditing}

                    />
                ) : (null
                )}

                <h3> Case Comments: </h3>
                <CommentCard comments={thisCase.comments} />
                {/* add CaseComments.js + maps in order */}

                <h3> Add Comment: </h3>
                <NewComment caseId={id} />


            </>
        )
    } else {
        return (
            <div> Loading... </div>
        )
    }

}

export default CurrentCase;





// <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
// <span role="img" aria-label="edit">
//     ✏️
// </span>
// </button>

