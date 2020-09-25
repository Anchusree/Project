import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Stylecss/contact.css';
import { BsFillEnvelopeFill,BsFillChatDotsFill } from "react-icons/bs";
import Iframe from 'react-iframe'

function Contact(){
    return(
        <>
        
        <div >
            <div>
                <img src= "https://cdn.shopify.com/s/files/1/1772/0301/t/2/assets/contact_us_bg.jpg?211374716554478536" width="90%" height="280px" align="center" alt=""/>
            </div>
            <div className="feedback">
                <h1>Give Us Your Feedback <BsFillChatDotsFill/> </h1>
                <div className="feedback-row">
                <br/>
                <Form autoComplete="off">
                     <Row className="row"> 
                         <Col>
                            <Form.Control  placeholder="Your Name" required="Required" />
                        </Col>
                     </Row>
                     <Row>
                         <Col>
                         <Form.Control type="email" placeholder="Email" required="Required" />
                        </Col>
                     </Row>
                     <Row>
                         <Col>
                         <Form.Control type="number" placeholder="Mobile Phone(Optional)" />
                        </Col>
                     </Row>
                     <Row>
                         <Col>
                         <Form.Control as="textarea" rows="4" placeholder="Your valuable message here..." required="Required" />
                        </Col>
                     </Row>
                     <Button  type="submit" className="submit">
                        Submit
                    </Button>
                </Form>
                </div>
                </div>
                <div className="contact">
                <h1>Contact Us</h1>
                <div>
                    <h4 >For more information</h4>
                    <h5 className="email"><BsFillEnvelopeFill/><a href="mailto:qixinfo@qix.qa">qixinfo@qix.qa</a></h5> 
                    <h4>For more technical information</h4>
                    <h5 className="email"><BsFillEnvelopeFill/><a href="mailto:qixtech@qix.qa">qixtech@qix.qa</a></h5>
                    <h4>Location</h4>
                    <h5 className="email">Meeza (MV2) Datacenter,Umm Qarn,Qatar</h5>
                    <Iframe width="550" height="305" id="gmap_canvas" src="https://maps.google.com/maps?q=Meeza%20%20datacenter%20Umm%20Qarn%20Qatar&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></Iframe>
                   
                </div>
            </div>
         </div>
        </>
    )
}
export default Contact;