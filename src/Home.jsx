import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './Heading';
import Intro from './Intro';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isHoveredWorkExp, setIsHoveredWorkExp] = useState(false);
 

  const handleMouseEnterWorkExp = () => {
    setIsHoveredWorkExp(true);
  };

  const handleMouseLeaveWorkExp = () => {
    setIsHoveredWorkExp(false);
  };

  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh', overflow:'hidden' }}>
        {/* Video background */}
        <video
  autoPlay
  loop
  muted
  playsInline
  className="video-background"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  }}
>
  <source src="216463.mp4" type="video/mp4" className="videos" />
  Your browser does not support the video tag.
</video>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar expand="lg" style={{ position: 'absolute', top: 0, width: '100%',height:'fit-content',paddingBottom:'0px' }}>
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="N.jpg"
                  alt="Logo"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#home"><Link to="/" style={{textDecoration:"none", color: 'white', fontSize: '20px', float: 'left' }}>HARSHITH NETHA</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{color:'white' }}/>
              <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'blue' }}>
                <Nav className="ms-auto" style={{ alignItems:"center", zIndex: '10' }}>
                  <Nav.Link
                    href="Work.jsx"
                    className="text"
                    onMouseEnter={handleMouseEnterWorkExp}
                    onMouseLeave={handleMouseLeaveWorkExp}
                  >
                    <Link to="/work" style={{
                      color: 'white',
                      fontSize: '20px',
                      border: `2px solid ${isHoveredWorkExp ? 'white' : 'transparent'}`,
                      padding: '10px',
                      borderRadius: '5px',
                      transition: 'border-color 0.3s',
                      textDecoration:"none"
                    }}>Work Experience
                  </Link>
                  </Nav.Link>
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div style={{ paddingTop: '60px' }}>
            <Heading/>
            <Intro/>
          
        </div>
       

      
      </div>
     
    </>
  );
}
