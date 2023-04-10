
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css"


//lists all closed cases in Db 
//No CRUD on closed cases 
//call api when this page loads and manage state in this component 


function AllClosedCases() {

    const [closedCases, setClosedCases] = useState()

useEffect(() => {
    fetch("/allclosedcases").then((r) => {
        if (r.ok) {
            r.json().then((cases) => setClosedCases(cases));
        }
    });
}, []);

console.log("closedCases", closedCases)

if (closedCases) {
    return (

        <>
        <table class="styled-table">
            <thead>
                <tr>
                    <th >Title</th>
                    <th >Description</th>
                    <th >Priority</th>
                    <th >Status</th>
                </tr>
            </thead>
            <tbody>

                {closedCases.map(c => {
                    return (
                        <tr key={c.id} class="active-row">
                            <Link to={'/currentcase/' + c.id}  >
                                <td>{c.title}</td>
                            </Link>
                            <td>{c.description}</td>
                            <td>{c.priority}</td>
                            <td>{c.status}</td>
                        </tr>



                    );
                })}

                {/* {myCases.map(c => {
                    return (
                        
                        <Link to={'/currentcase/' + c.id}  >
                            <tr key={c.id} >
                                <td>{c.title}</td>
                                <td>{c.description}</td>
                                <td>{c.priority}</td>
                                <td>{c.status}</td>
                            </tr>
                            <br></br>
                        </Link>
                        
                        
                    );
                })} */}
            </tbody>
        </table>
    </>




        // each case selected is it's own API call 

    )
} else {
    return (
    <div> 
        "Loading..."
    </div>
    )
}

    // return (
    //     <>
    //         <table>
    //             <thead align='left'>
    //                 <tr>
    //                     <th >Title</th>
    //                     <th >Description</th>
    //                     <th >Priority</th>
    //                     <th >Status</th>
    //                 </tr>
    //             </thead>
    //             <tbody align='left'>
    //                 {myCases.map(c => {
    //                     return (
                            
    //                         <Link to={'/currentcase/' + c.id} >
    //                             <tr key={c.id}>
    //                                 <td>{c.title}</td>
    //                                 <td>{c.description}</td>
    //                                 <td>{c.priority}</td>
    //                                 <td>{c.status}</td>
    //                             </tr>
    //                             <br></br>
    //                         </Link>
                            
                            
    //                     );
    //                 })}
    //             </tbody>
    //         </table>
    //     </>
    // )

}

export default AllClosedCases;