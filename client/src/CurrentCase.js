
import React, { useContext } from "react";
import { CaseContext } from "./context/CaseContext";
import {
    useParams
} from "react-router-dom";


//need to be able to EDIT and DELETE this case (CRUD) 

// NEED TO MAP ALL THE COMMENTS!!!! 

function CurrentCase() {

    let { id } = useParams();
    //take the id and match to the object from context and render 
    const [cases, setCases] = useContext(CaseContext)

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


    return (
        <>

            <h1>Open Case</h1>

            Case Title
            {thisCase.title}
            Case Description

            Case Status

            Case

            {/* <tr key={thisCase.id}>
                <td></td>
                <td>{thisCase.description}</td>
                <td>{thisCase.priority}</td>
                <td>{thisCase.status}</td>
            </tr> */}

            <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">
                    🗑
                </span>
            </button>

        </>



    )
}

export default CurrentCase;





// <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
// <span role="img" aria-label="edit">
//     ✏️
// </span>
// </button>

