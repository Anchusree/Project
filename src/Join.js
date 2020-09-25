import React from 'react'
import { Card } from 'react-bootstrap';
import './Stylecss/join.css';
import joinus from './Images/joinus.jpg'

function Join(){
    return(
        <>
         <div >
         <div className="join">
               <img src={joinus} width="80%" height="210px" alt=""/>
            </div>
            <Card >
                <Card.Body className="guidelines-card">
                    <div className="guidelines">
                        <h2>Guidelines</h2>
                        <div>
                            <ul>
                                <li>Sign our Qatar Exchange Policy </li>
                                <li>Fill out the application form </li>
                                <li>Submit the Membership Application Form, along with the signed QIX policy, to the QIX Steering Committee by email qixinfo@qix.qa </li>
                                <li>Once approved, the applicant will receive a confirmation email.</li>
                                <li>The QIX Technical Team will then contact the applicant to cooperate and implement the QIX technical changes required for the connectivity.</li>
                                <li>Once the connection is established, the applicant status will change to member and the peering can be initiated with other QIX members.</li>
                            </ul>
                        </div>  
                    </div>
                    <div className="downloads">
                    <h2>Downloads Here</h2>
                    <div className="downloadbttn">
                    <button className="formbttn"><a href="https://www.qix.qa/files/QIX_Policy.pdf"> QIX Policy </a></button><br/><br/>
                    <button className="formbttn"><a href="https://www.qix.qa/files/QIX_Membership_Application_Form.pdf">  Application Form</a></button>
                    </div>
            </div>
                </Card.Body>
            </Card>
         

        </div>
        </>
    )
}
export default Join;