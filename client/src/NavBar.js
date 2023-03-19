import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Page.css"


function NavBar({ agent, setAgent }) {

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        navigate("/")
        setAgent()

      }
    });
  }

  return (
    <header align='center'>

      <h1> Support  </h1>

      <div >

        {agent ? (
          <>
            <button>
              <Link to="/home">Home</Link>
            </button>
            <button>
              <Link to="/newcase">New Case</Link>
            </button>
            <button onClick={handleLogoutClick}> Logout </button>
          </>
        ) : (
          <>
            <button>
              <Link to="/">Home</Link>
            </button>

            <button>
              <Link to="/signup">Signup</Link>
            </button>

            <button>
              <Link to="/login">Login</Link>
            </button>
          </>
        )}

      </div>
    </header>
  );
}

export default NavBar;
