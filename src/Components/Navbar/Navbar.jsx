import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
    const[isLogin,setisLogin] =useState(false);
    const haldleLogin=()=>{
        setisLogin(!isLogin);
    }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
       {
        !isLogin &&(
            <>
             <div className="navbar-buttons">
          <Button variant="warning" className="mr-2" onClick={haldleLogin}>Login</Button>
          <Button variant="success">SignUp</Button>
        </div>
            </>
        )
       }
       {
        isLogin &&(
            <>
             <div className="navbar-buttons">
             <Button variant="success">Profile</Button>
          <Button variant="warning" className="mr-2" onClick={haldleLogin}>Logout</Button>
          
        </div>
            </>
        )
       }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
