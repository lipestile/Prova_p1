import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cabecalho = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/animes"><img width={'100'} src='/images/jikan_api.png'></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/animes">Anime</Nav.Link>
            <Nav.Link href="/genero">genero</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    
    </>
  )
}

export default Cabecalho