import React from "react";
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Navigation() {
  const { auth } = usePage().props; // para poder acceder tienes que entrar en el handleInertiaRequest en midelware y establecerlo


  return (
    <Navbar variant="drk" bg="dark" expand="lg" className="p-3">
      <Container fluid>a
        <Navbar.Brand href="/">MoviFP Sostenible</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="mx-2 bi bi-house"> Home</Nav.Link>
            <Nav.Link href="/" className="mx-2 bi bi-search"> Search</Nav.Link>
            {auth.user == null &&
              <>
                <Nav.Link href="/login" className="mx-2 bi bi-door-open"> Log in</Nav.Link>
                <Nav.Link href="/register" className="mx-2 bi bi-check-circle"> Sign up</Nav.Link>
              </>
            }
            {auth.user != null &&
              <>
                <Nav.Link href="/" className="mx-2 bi bi-car-front"> Publish a ride</Nav.Link>
                <NavDropdown
                  id="nav-dropdown"
                  title={auth.user.name}
                  menuVariant="dark"
                  align="end"
                  className="mx-2"
                >
                  <NavDropdown.Item href="#"><i className='bi bi-car-front pe-3'></i>My rides</NavDropdown.Item>
                  <NavDropdown.Item href="#"><i className='bi bi-chat pe-3'></i>Messages</NavDropdown.Item>
                  <NavDropdown.Item href="#"><i className='bi bi-credit-card pe-3'></i>Payments</NavDropdown.Item>
                  <NavDropdown.Item href="/profile"><i className='bi bi-person-circle pe-3'></i>Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link href="/logout" method="post" as="NavDropDown.Item">
                      <i className='bi bi-door-closed pe-3'></i>
                      Log out
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

