import { Nav, NavLink, NavMenu } from "./NavElements";
import './NavBar.css'; 

function TopNavBar() {
  return (
    <div className="navbar-container">
        <Nav className="navbar">
            <div className="nav-left">
                <NavLink to="/">Amy Phan</NavLink>
            </div>
            <NavMenu className="navbar-links">
                <NavLink to="/Work">Work</NavLink>
                <NavLink to="/About">About</NavLink>
            </NavMenu>
        </Nav>
    </div>
    );
};

export default TopNavBar;