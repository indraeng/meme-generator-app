import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function MemeCard(props) {
    const navigate = useNavigate();
    return (
        <Card style={{ width: '18rem',margin:'10px',padding:'5px' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button variant="primary" onClick={()=>navigate(`/edit?url=${props.img}`)}>Edit</Button>
            </Card.Body>
        </Card>
    )
}
