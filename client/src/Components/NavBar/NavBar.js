import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Js/Actions/user';

const NavBar = () => {
  const jsAuth = useSelector((state) => state.userReducer.jsAuth);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {jsAuth ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
            {jsAuth ? (
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ContactList">ContactList</NavDropdown.Item>
                <NavDropdown.Item href="/Add">AddContact</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            ) : null}
          </Nav>
          {jsAuth ? (
            <div className='logout'>
              <Nav.Link href="/" onClick={() => dispatch(logout())}>Logout</Nav.Link>
            </div>
          ) : (
            <div className='login'>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
