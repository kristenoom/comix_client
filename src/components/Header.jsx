import { Navbar, NavbarBrand, Nav } from "reactstrap";

//import { NavItem, NavLink } from "reactstrap";


const Header = (props) => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/" className="heading"><h1>COMIX</h1></NavbarBrand>
            </Navbar>
        </header>
    )
};

export default Header;