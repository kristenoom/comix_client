import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavLogo } from "reactstrap";
import React, {useState} from 'react'

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">Comix History</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/kristenoom/comix_client.git">GitHub</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
};

export default Header;