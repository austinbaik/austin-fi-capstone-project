import React, { useContext, useState, useEffect } from "react";
import { CaseContext } from "./context/CaseContext";
import {
    useParams,
    useNavigate
} from "react-router-dom";
import EditCase from "./EditCase";
import NewComment from "./NewComment";
import CommentCard from "./CommentCard";


function CurrentCase() {

    let { id } = useParams();
    //take the id and match to the object from context and render 
    const [cases, setCases] = useContext(CaseContext)
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const [thisCase, setThisCase] = useState({
        title: "",
        user: { name: "" },
        description: "",
        status: "",
        priority: "",
        comments: [{
            id: "",
            created_at: "",
            comment: "",
            creator_name: ""
        }],
    })


    useEffect(() => {

        fetch(`/cases/${id}/`).then((r) => {
            if (r.ok) {
                r.json().then((thisCase) => setThisCase(thisCase))
                    .then(console.log("r", thisCase))

            } else {
                console.log('errored')
            }
        })

    }, [id]);


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
                r.json().then((thisCase) => {
                    setThisCase(thisCase)
                    console.log(thisCase)
                }
                )
            } else {
                r.json().then((err) => console.log(err))
            }
        }
        )
    }


    if (thisCase) {
        // const thisCase = cases.find(c => c.id == id)
        // console.log("thisCase", thisCase)
        // console.log("assigned?", thisCase.assigned)

        const handleDeleteClick = (e) => {
            e.preventDefault();
            fetch(`/cases/${thisCase.id}`, {
                method: "DELETE"
            }).then((r) => {
                if (r.ok) {
                    r.json().then((cases) => setCases(cases, "delete"))
                        .then(navigate("/home"))
                } else {
                    r.json().then((err) => console.log(err))
                }
            }
            )
        }


        return (
            <>
                <h1>{thisCase.title}</h1>
                <h3>Customer Name:</h3>
                {thisCase.user.name}
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

                <br></br>

                {isEditing ? (
                    <EditCase thisCase={thisCase} setIsEditing={setIsEditing} setThisCase={setThisCase}

                    />
                ) : (null
                )}


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
                <h3> Case Comments: </h3>
                <CommentCard comments={thisCase.comments}  />

                <h3> Add Comment: </h3>
                <NewComment caseId={id} setThisCase={setThisCase} />
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

