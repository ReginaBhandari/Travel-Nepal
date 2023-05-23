import React from "react";
import { Link } from "react-router-dom";

function Bookings() {
  return (
    <div className="booking">
      <button>
        <Link to={`/bookings`}>Bookings</Link>
      </button>
    </div>
  );
}

export default Bookings;
