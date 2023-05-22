import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbarsite.css'

// ----------------------------------------------------------------------------------function to create the navbar-*/}
function NavbarS() {
  return (
    <Navbar bg="dark" expand="md">
      {/*---------------------------------- To adjust the color of the navbar and the location of the mobile menu -*/}
      <Container fluid>
        <Navbar.Brand href="#" className="nameSite">Movis Dark</Navbar.Brand>
        {/*---------------------------------------------------------------------------------------- Web site name -*/}
        <Navbar.Toggle aria-controls="navbarScroll" className="list"/>
        {/*-------------------------------------------------------------------------------------------- menu icon -*/}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title={<span className="span">List</span>} id="navbarScrollingDropdown">
            {/* ----------------------------------------------------------------------------------Categories list -*/}
              <NavDropdown.Item className="lSC" href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item className="lSC" href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="lSC" href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
          {/*----------------------------------------------------------------------------------------- search box -*/}
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            {/*-------------------------------------------------------------------------------- Search box button -*/}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarS;
