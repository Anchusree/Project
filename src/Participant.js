import React from 'react'
import ParticipantList from './ParticipantList';

function Participant(){
    const participanttable = [
        {organisation:"Ooredoo Q.P.S.C",asn:8781,ipv:"185.1.159.9",status:"Connected"},
        {organisation:"Vodafone Qatar Q.S.C",asn:48728,ipv:"185.1.159.10",status:"Connected"},
        {organisation:"Qatar University",asn:198499,ipv:"N/A",status:"Down"},
        {organisation:"Gulf Bridge International",asn:200612,ipv:"185.1.159.13",status:"Connected"},  
    ] 

    return(
        <div>
            <ParticipantList initialList ={participanttable} />

        </div>
    )
}
export default Participant;