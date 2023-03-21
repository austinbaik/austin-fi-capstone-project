//cases that are pending an owner 

import React, {useEffect} from "react";
//component lists the cases assigned to the agent 

function AllUnassignedCases () {


    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((agent) => setAgent(agent));
          }
        });
      }, []);
    


    return (
        <> we'll map the table here </>
    )
}

export default AllUnassignedCases;
