import React,{useState} from 'react';
import { Table } from 'react-bootstrap';
import './Stylecss/participant.css'

function ParticipantList({initialList}){

    const [list] = useState(initialList);

    const renderBody = () => {

        return list.map(((lst) => {
            return (
                <tr key={lst.organisation}>
                    <td >{lst.organisation}</td>
                    <td >{lst.asn}</td>
                    <td >{lst.ipv}</td>
                    <td> {lst.status}</td>
                </tr>
            )
        }))
    }

    return(
        <div className="tablelist">
            <Table striped bordered hover size="md" className="table-responsive">
                <thead>
                     <tr>
                      <th>Organization</th>
                     <th>ASN</th>
                      <th>IPv4</th>
                      <th>Status</th>
                    
                    </tr>
             </thead>
             <tbody>
             {renderBody()}
            </tbody>
         </Table>
        </div>
    )
}
export default ParticipantList;
