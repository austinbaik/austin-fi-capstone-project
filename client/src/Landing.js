import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";


function Landing( {hello} ) {
    // const navigate = useNavigate();



    
    return (
        <div align='center'>


            <h2> Customer Log-in </h2>
            <h3> Customer Sign-up </h3>


            <button>
              <Link to="/login">Agent Log-in</Link>
            </button>
            <br></br>
            <button>
              <Link to="/signup">Creat Agent Account</Link>
            </button>


        </div>
    )

}

export default Landing; 