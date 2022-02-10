import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #80ced6 }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #222;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #222;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><b><i>My Favorite Recipes</i></b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link> <Link to="/">Home</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link ><Link to="/recipes">Recipes</Link></Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link ><Link to="/about">About</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link to="/contact">Contact</Link></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)