
import React, { useEffect, useState } from "react";

//lists all closed cases in Db 
//No CRUD on closed cases 
//call api when this page loads and manage state in this component 


function AllClosedCases() {


    const [closedCases, setClosedCases] = useState()

// useEffect(() => {
//     fetch("/cases").then((r) => {
//         if (r.ok) {
//             r.json().then((agentCases) => setCases(agentCases));
//         }
//     });
// }, []);


    return (
        <> we'll map the table here </>
        // each case selected is it's own API call 

    )

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