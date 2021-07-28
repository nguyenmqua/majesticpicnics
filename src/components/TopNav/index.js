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
              <a href="/">Home</a>
            </NavItem>
            <NavItem className="navItem">
              <a href="/contact">Book Us</a>
            </NavItem>
            <NavItem className="navItem">
              <a href="/gallery">Gallery</a>
            </NavItem>
            <NavItem className="navItem">
              <a href="/faq">F.A.Q/Info</a>
            </NavItem>
            <NavItem className="navItem">
              <a href="https://www.instagram.com/majestic.picnics/?hl=en">
                <i className="fab fa-instagram fa-1x"></i>
              </a>
            </NavItem>
            <NavItem className="navItem">
              <a href="mailto:majesticpicnicss@gmail.com">
                <i className="far fa-envelope"></i>
              </a>
            </NavItem>
            <NavItem className="navItem">
              <a href="https://vm.tiktok.com/ZMdnvwgYK/">
                <i className="fab fa-tiktok fa-1x"></i>
              </a>{" "}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
