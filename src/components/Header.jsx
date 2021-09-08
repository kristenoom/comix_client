import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/" className="heading"><h1>COMIX</h1></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    {/* <NavItem>
                        <NavLink href="https://github.com/kristenoom/react-fundamentals">GitHub</NavLink>
                    </NavItem> */}
                </Nav>
            </Navbar>
        </header>
    )
};

export default Header;