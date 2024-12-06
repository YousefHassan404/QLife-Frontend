import React from "react";
import logo from '../../../public/images/QL-logo.png';
import { IoPersonCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../../Utils/Providers/Context/UserContext";
import { SideContext } from "../../../Utils/Providers/Context/SideContext";
import { Link, NavLink } from "react-router-dom";
import Side from "../Side/Side";


export default function Header() {
  const { isOpen, toggleSidebar } = useContext(SideContext);
  console.log(isOpen)
  const { user } = useContext(UserContext);

  return (
    <header>
      <div className="container max">
        <div className="logo">
          <h1>
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </h1>
        </div>

        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>

        <nav className={"close-nav"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to={`/profile`}>
                {user ? (
                  <img className="img-icon" src={user.imageUrl} alt="User" />
                ) : (
                  <IoPersonCircleOutline />
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Side className="close-comp"/>
    </header>
  );
}
