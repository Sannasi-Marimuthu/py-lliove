import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        

        <li className={pathname === "/#" ? "current" : ""}>
          <Link to="/#">Properties</Link>
        </li>
        {/* End Properties single menu */}

         <li className={pathname === "/#" ? "current" : ""}>
          <Link to="/#">Attractions</Link>
        </li>
        {/* End Attractions single menu */}

         <li className={pathname === "/#" ? "current" : ""}>
          <Link to="/#">Popular</Link>
        </li>
        {/* End Destinatinos single menu */}

       
       
      </ul>
    </nav>
  );
};

export default MainMenu;
