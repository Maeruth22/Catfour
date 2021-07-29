import { useState } from "react"
import {Card, Row, Col, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Item.css'

export default function Item (props) {
    return (
        <div className='container col-md-4'>
            <Row className='Row'>
                
                <Col>
                    <Card className='card'>
                        <Card.Body>
                            <Card.Img src={props.img} fluid/>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                            <Card.Text>{props.price}</Card.Text>
                                <Button variant="warning">
                                    <NavLink to="/item">Ver Producto</NavLink>
                                </Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
       </div>
    )
    }