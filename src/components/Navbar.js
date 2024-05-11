import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import BtnToggleTheme from "./BtnTottleTheme";
import { Col, Row } from "react-bootstrap";
import { MenuItems } from "../helper/constant"

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span/>
          <span/>
          <span/>
        </Navbar.Toggle>
      
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" defaultActiveKey="#home">
          {MenuItems.map(menu=>
            <Nav.Item>
              <Nav.Link as={Link} to={menu.path} onClick={() => updateExpanded(false)}>
                {menu.icon} {menu.name}
              </Nav.Link>
            </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>

        { !expand &&  
        <Row>
          <Col className="col-sm-4">
          <BtnToggleTheme/> 
          </Col>
        </Row>       
        }  
        
    </Navbar>
  );
}

export default NavBar;
