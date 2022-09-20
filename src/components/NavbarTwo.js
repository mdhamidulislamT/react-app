import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

const NavbarTwo = () => {
  return (
    
          <Nav className="justify-content-center bg-info" variant="tabs">
            <Nav.Item>
              <Nav.Link href="/hometwo">HomeTwo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/about-me">
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/contact-us">
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
          </Nav>
  );
};

export default NavbarTwo;
