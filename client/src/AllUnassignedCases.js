//cases that are pending an owner 

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CaseContext } from "./context/CaseContext";
import "./Table.css"
//component lists the cases assigned to the agent 


function AllUnassignedCases() {

    const [cases, setCases] = useContext(CaseContext)
    //from here, sort through the cases array for unassigned tickets 

    console.log(cases)
    // .filter through the 'cases' array for unassigned cases -> maps through that array. 


    if (cases) {


        let unassCases = cases.filter(unass => (unass.assigned != true))

        return (
            <>
                <table class="styled-table">
                    <thead >
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unassCases.map(c => {
                            return (
                                <tr key={c.id} class="active-row">
                                    <Link to={'/currentcase/' + c.id} >
                                        <td>{c.title}</td>
                                    </Link>
                                    <td>{c.description}</td>
                                    <td>{c.priority}</td>
                                    <td>{c.status}</td>
                                </tr>


                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <div> Loading... </div>
        )
    }
}

export default AllUnassignedCases;
