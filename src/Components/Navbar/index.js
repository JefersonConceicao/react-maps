import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaList size={30} />
        </Link>
      </div>
      <nav> 
        <ul> 
            <li> 
                <Link to="#"> 
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
