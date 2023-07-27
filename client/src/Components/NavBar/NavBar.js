import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  return (
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Bilel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ContactList">ContactList</NavDropdown.Item>
              <NavDropdown.Item href="/Add">AddContact</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
  )
}

export default NavBar