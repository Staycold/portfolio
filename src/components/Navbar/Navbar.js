import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


function Coldnavbar(){

return(

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Patrick's Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/31">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
    <Nav.Link href="#about">About Me</Nav.Link>
      <Nav.Link href="#work">Work</Nav.Link>
      <Nav.Link href="https://github.com/Staycold" target="_blank">Github</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="https://docs.google.com/document/d/1Ng1hsySFSXGeih85cBUUxyI3Og4ya03Eitoea9rajPg/edit?usp=sharing" target="_blank">Resume</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

)};



export default Coldnavbar;