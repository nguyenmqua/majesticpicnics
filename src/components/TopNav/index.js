import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import Logo from "../../assets/img/logo.jpg";
import "./TopNav.css";
import { Link } from 'react-router-dom';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navibar">
      <Navbar className="navbar" light expand="md">
        <NavbarBrand href="/">
          <img alt="logo" className="logo" src={Logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="navItem">
              <Link color="light" to="/">Home</Link>
            </NavItem>
            <NavItem className="navItem">
              <Link color="light" to="/contact">Book Us</Link>
            </NavItem>
            <NavItem className="navItem">
              <Link color="light" to="/gallery">Gallery</Link>
            </NavItem>
            <NavItem className="navItem">
              <Link color="light" to="/faq">F.A.Q/Info</Link>
            </NavItem>
            <NavItem className="navItem">
              <a href="https://www.instagram.com/majestic.picnics/?hl=en">
                <i className="fab fa-instagram fa-1x"></i>
              </a>
            </NavItem>
            <NavItem className="navItem">
              <a href="mailto:majesticpicnicss@gmail.com">
                <i className="far fa-envelop fa-1x"></i>
              </a>
            </NavItem>
            <NavItem className="navItem">
              <a href="https://vm.tiktok.com/ZMdnvwgYK/">
                <i className="fab fa-tiktok fa-1x"></i>
             </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
