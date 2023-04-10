import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function CommentCard( {comments} ) {

    // t.string "comment"
    // t.integer "case_id"
    // t.string "creator_name"
    // t.boolean "is_agent"

    const navigate = useNavigate();
    const [comment, setComment] = useState("");

    console.log("testing commentcard")



    return (

        <div> 

            {comments.map(c => { console.log(c)
                return (
                    <form key={c.id}>
                        At {c.created_at}, <br>
                        
                        </br>{c.creator_name} said: 
                         <br></br>
                         {c.comment}
                       

                    </form>
                )
            })}

        </div>




    )

}

export default CommentCard