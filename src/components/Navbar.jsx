import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly m-5 p-5 bg-slate-500 text-white rounded ">
        <div className="hover:text-red-400 font-bold">
          <Link to="/">Form</Link>
        </div>

        <div className="hover:text-red-400 font-bold">
          <Link to="/imageUpload">Upload Image</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
