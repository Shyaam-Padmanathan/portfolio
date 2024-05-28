import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BtnToggleTheme from "./BtnTottleTheme";
import { Col, Row } from "react-bootstrap";
import { MenuItems } from "../helper/constant"
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection =(sectionId)=>{
    const element = document.getElementById(sectionId);
    if(element){
      const marginTop=0;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({top: scrollToY, behavior: 'smooth'});
    }
  }

  useEffect(()=>{
    const handleScroll = () =>{
    if(window.scrollY > 300)
    {
      setIsScrolled(true);
      document.getElementById('scrollTop').style.display = 'block';
    }
    else
    {
      setIsScrolled(false);
      document.getElementById('scrollTop').style.display = 'none';
    }
  }
  window.addEventListener('scroll',handleScroll);

  return ()=>{
    window.removeEventListener('scroll',handleScroll);
  }
  }, [])


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
            <Nav.Item key={menu.name} onClick={()=> scrollToSection(menu.section)}>
              <Nav.Link as={Link} to='/'>
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
