import React from 'react'
import {  Card } from 'react-bootstrap';
import './Stylecss/about.css'
import internetweb from './Images/internet-web.jpg'
import Getconnected from './Images/getconnected.jpg'
import Partcipant from './Images/participants.jpg'
import Contactus from './Images/contactjpg.jpg'
import { Route, Link } from "react-router-dom";
import Join from './Join';
import Participant from './Participant';
import Contact from './Contact';

function About(){
    return(
    
        <div>
             <div className="row">  
               <div className="aboutus">
               <img src={internetweb} width="100%" height="320px" alt=""/>
               <h1>ABOUT US</h1>
               </div>
               <Card>
                <Card.Body>
                    <div className="about-content"> 
                    <h2><b>WE QIX</b></h2>
                    <p></p>
                    <p>Instantiated in the form of an OSI layer 2 switch fabric, is an Internet exchange point(s) located in Qatar, with the goal of creating local and international bandwidth exchange between Internet networks for the purposes 
                        of bettering Internet connectivity in the region and promoting economic development.<br/><br/>
                        Qatar is booming with Infrastructure in all the sectors, Qatar is striving for excellence to build the Internet more faster, reliable and economical to be part of the global initiative. Qatar Internet Exhchange point establishment is one such step taken up by the government of Qatar.</p>
                    </div>

                </Card.Body>
            </Card>
        </div>
        <div className="about-card">
        <div className="row">
           
            <Card border="primary" className="card-contaner" style={{ width: '25rem',height:'350px' }}>
                <Card.Header style={{ textAlign:"center",fontSize:"30px", cursor: "pointer" }}>
                    <Link to="/joinUs"> Get Connected With Us</Link>
                        <Route path="/joinUs" component={Join}/>
                    </Card.Header>
                    <Card.Body className="connected">
                            <img src={Getconnected}  width="350px" height="200px"alt=""/>
                    </Card.Body>
            </Card>

            <Card border="primary" className="card-contaner" style={{ width: '25rem',height:'350px' }}>
                <Card.Header style={{ textAlign:"center",fontSize:"30px", cursor: "pointer"}}>
                <Link to="/participants"> Our Members/Participants</Link>
                        <Route path="/participants" component={Participant}/></Card.Header>
                <Card.Body className="connected">
                    <img src={Partcipant}  width="350px" height="200px"alt=""/>
                </Card.Body>
            </Card>
            <Card border="primary" className="card-contaner" style={{ width: '25rem',height:'350px'}}>
                <Card.Header style={{ textAlign:"center",fontSize:"30px", cursor: "pointer"}}>
                <Link to="/contactus"> Contact us</Link>
                        <Route path="/contactus" component={Contact}/></Card.Header>
                <Card.Body className="connected">
                    <img src={Contactus}  width="350px" height="200px"alt=""/>
                </Card.Body>
            </Card>
            </div>
            </div>

            <div className="row">
               


            </div>
        </div>
    )
}
export default About;