import React from 'react';
import './Stylecss/home.css'
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Card, Nav, Navbar } from 'react-bootstrap';
import logo from './Images/qix_logo.jpg'
import Home from './Home';
import About from './About';
import Participant from './Participant';
import Join from './Join';
import Contact from './Contact';


function App() {
  return (
    
    <div>
      <div className="header1">Member Login</div>
   
        <Router>
           <Navbar >
            <Navbar.Brand >
              <img className="logo" src={logo} width="170px" alt =""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Link to="/WebsiteProject" style={{marginRight: '15px',color:'#041680 ',fontSize:'20px',textDecoration:'none'}} ><b>Home</b></Link>
              <Link to="/about" style={{marginRight: '15px',color:'#041680 ',fontSize:'20px',textDecoration:'none'}}><b>About Us</b></Link>
              <Link to="/participants" style={{marginRight: '15px',color:'#041680  ',fontSize:'20px',textDecoration:'none'}}><b>Participants</b></Link>
              <Link to="/joinUs"style={{marginRight: '15px',color:'#041680 ',fontSize:'20px',textDecoration:'none'}}><b>Join QIX</b></Link>
              <Link to="/contactus" style={{marginRight: '15px',color:'#041680 ',fontSize:'20px',textDecoration:'none'}}><b>Contact Us</b></Link>
            </Nav>
          
    
            </Navbar.Collapse>
            </Navbar>
            <Route path="/WebsiteProject" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/participants" component={Participant}/>
            <Route path="/joinUs" component={Join}/>
            <Route path="/contactus" component={Contact}/>

            <footer>
            <Card>
                    <div className="copyright"> 
                    <p>Copyright © 2020 Qatar Internet Exchange Point. All rights reserved</p>
                    </div>

             </Card>
            </footer>
        </Router>
        </div>
  );
}

export default App;
