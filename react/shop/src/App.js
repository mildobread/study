import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import data from './data.js';
import MainPage from './routes/main-page.js';
import Detail from './routes/detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate(); // hook => 유용한 것들이 들어있는 함수같은거

  return (
    <div className="App">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">Mildobread</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
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
        <Route path="/" element={<MainPage shoes={shoes}/>}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>
        <Route path="*" element={<div>없는페이지요</div>}/>
      </Routes>

    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet/>
    </div>
  )
}

export default App;
