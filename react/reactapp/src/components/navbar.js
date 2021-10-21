import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./login"
import { Navbar ,Container,Nav} from 'react-bootstrap';

const navbar = ({Login}) => {
    
    return (
        <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-ends">
            <Navbar.Text>

            <Nav className="me-auto">
           
           
            <Nav.Link href="/login" className="justify-content-end">Login</Nav.Link>
            {/* <Nav.Link href="/register">Register</Nav.Link> */}
            </Nav>

            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default navbar






