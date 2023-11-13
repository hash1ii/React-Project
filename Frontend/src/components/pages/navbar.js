import React from 'react'
import styles from "../css/navbar.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const navbar = () => {
  return (
    <>
     
 <Navbar  className={styles.navbar}  bg="dark" expand="lg">

      <Container fluid>
        {/* <div className={styles.auto}> */}
        <Navbar.Brand href="#" className={styles.text}>AUTO-HUB</Navbar.Brand>
        {/* </div> */}
        <Navbar.Toggle aria-controls="navbarScroll"  className={styles.whiteText}/>
        <Navbar.Collapse id="navbarScroll">
          {/* <div className={styles.float}> */}
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

       
            <Nav href="#home"><Link  className={styles.text2} to="/">HOME</Link></Nav>
            <Nav href="#services" ><Link  className={styles.text2} to="services">SERVICES</Link></Nav>
            <Nav href="#about" ><Link  className={styles.text2} to="about">ABOUT</Link></Nav>
            <Nav href="#contact" ><Link  className={styles.text2} to="ourteam">OUR TEAM</Link></Nav>
            <Nav href="#ourteam" ><Link  className={styles.text2} to="contact">CONTACT</Link></Nav>
          
             </Nav>

             {/* </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
   

    </>
  )
}

export default navbar