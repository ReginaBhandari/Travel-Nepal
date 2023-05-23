import React from "react";
import { useHistory, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
// import logo from '../../assests/logo.jpeg';
import create from "../../assests/crud/create.svg";
import read from "../../assests/crud/read.svg";
import update from "../../assests/crud/update.svg";
import remove from "../../assests/crud/delete.svg";

function DestinationCRUD() {
  const history = useHistory();

  function jumpToHome(e) {
    history.push("/");
  }

  return (
    <div className="destinationcrud">
      <button className="landing-page " onClick={jumpToHome}>
        <AiFillHome />
      </button>

      <h1>Destination CRUD Operations</h1>
      <div className="destinationcrud-list">
        <div>
          <img src={create} alt="create" />
          <button>
            <Link to={`/adddestinations`}>Create Destination </Link>
          </button>
        </div>
        <div>
          <img src={read} alt="read" />
          <button>
            <Link to={`/displaydestinations`}>Read Destination </Link>{" "}
          </button>{" "}
        </div>
        <div>
          <img src={remove} alt="delete" />
          <button>
            {" "}
            <Link to={`/deletedestinations`}>Delete Destination </Link>
          </button>{" "}
        </div>
        <div>
          <img src={update} alt="update" />
          <button>
            <Link to={`/updatedestination`}>Update Destination </Link>{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default DestinationCRUD;
