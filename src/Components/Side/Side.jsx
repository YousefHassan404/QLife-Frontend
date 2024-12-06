import { useContext } from "react";
import { SideContext } from "../../../Utils/Providers/Context/SideContext";
import { Link } from "react-router-dom";
const Side = () => {
    const { isOpen, toggleSidebar } = useContext(SideContext);
    console.log(isOpen)
  return (
    
  <section className={isOpen ? "side-menu show-menu" : "side-menu"}>
      <div className="container max">
        <p onClick={toggleSidebar} className="close">
          X
        </p>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>

              <Link to={'/about'}>About</Link>
            </li>
            <li>
            <Link to={'/work'}>Work</Link>
            </li>
            <li>
            <Link to={'/profile'}>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
  
};


export default Side;