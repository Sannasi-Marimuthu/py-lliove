import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import Social from "../Common/Social/Social";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
          <img src="/img/general/py-ollive-logo.png" alt="brand" width={130} />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/" ? "menu-active-link" : ""}
          >
            Properties
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Attractions
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Popular
          </MenuItem>
          {/* End  Desitinations Menu */}
        
        </Menu>
      </Sidebar>
    </>
  );
};

export default MobileMenu;
