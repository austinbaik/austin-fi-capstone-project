
import React, {useState} from "react"; 
import "./modal.css"; 


const ErrorModal = (props) => {
  console.log("props", props.message )


  if (Array.isArray(props.message)){


    return (
      <section align="center">
        <div className="modalBackdrop" />
        <div className="modal-container">
          <header>
            <h2>An error occured!</h2>
          </header>
          <div className="error-msg">
            {props.message.map(e => {

              return(
                 <p>{e}</p>
              )
            })}
           
          </div>
          <footer className="modal-close">
          <button type="button" onClick={props.onClose}>close</button> 
          </footer>
        </div>
      </section>
    )
          }

    else { 
      return (
        <section align="center">
          <div className="modalBackdrop" />
          <div className="modal-container">
            <header>
              <h2>An error occured!</h2>
            </header>
            <div className="error-msg">
              {props.message.error}
             
            </div>
            <footer className="modal-close">
            <button type="button" onClick={props.onClose}>close</button> 
            </footer>
          </div>
        </section>
      )

    }
   }
   




   export default ErrorModal
   


   // instead of iterating and mapping errors 
   // first check the type of prop 
   // if (object) { 
  // }else {

  //   }
  //  }
  //is array? 