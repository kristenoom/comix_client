import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
//import Sidebar from './Sidebar';

//import { BrowserRouter as Router } from 'react-router-dom';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/" className="heading"><h1>COMIXROLL</h1></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={props.clickLogout} color="dark">Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
};

export default Header;