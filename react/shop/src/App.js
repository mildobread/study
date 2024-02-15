import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import data from './data.js';
import Comp from './component.js';
import Detail from './detail.js';
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">Mildobread</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <Container>
            <Row>
              { shoes.map((a, i)=>{
                return <Comp shoes={shoes[i]} index={i}></Comp>
              })}
            </Row>
          </Container>
          </>
        }/>

        <Route path="/detail" element={
          <>
          <div className="detail-bg"></div>
          <Container>
            <Row>
              { shoes.map((a, i)=>{
                return <Detail shoes={shoes[i]} index={i}></Detail>
              })}
            </Row>
          </Container>
          </>
        }/>

        <Route path="/about" element={<div>어바웃페이지임</div>}/>
      </Routes>

    </div>
  );
}

export default App;
