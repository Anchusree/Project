import React from 'react'
import { Card } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
import About from './About';
import Headingslides from './Headingslides';
import ParticipantSlides from './ParticipantSlides';

function Home(){

    return(
        <div>
             <div className="row">
                <div className="header-img">
                <Headingslides/>
                    <div className="top-left-text">
                        <h1 ><b>QATAR INTERNET EXCHANGE</b></h1>
                        <button className="learnmore"><Link to="/about">Learn More</Link></button>
                        <Route path="/about" component={About}/>
                    </div>                
                </div>
        
            <section className="mission">
                <div className="container-fluid">
                    <Card >
                        <Card.Body className="mission">
                        <h3 className="mission-text">Our Mission</h3>
                        <p className="mission-para">
                            <i>"To enhance the efficiency of the Internet in the State of Qatar by having simplified and scalable interconnection agreements between the QIX Participants.
                        Encourage the local content development, and attract global content providers.Reduce the dependency on the international Internet connectivity."</i></p></Card.Body></Card>
                </div>
            </section>
            </div>
            <section>
                <Card>
                    <Card.Body>
                    <h3 className="mission-text">Our Participants</h3> 
                    <ParticipantSlides/>
                    </Card.Body>
                </Card>
            </section>
        </div>
    )
}
export default Home;