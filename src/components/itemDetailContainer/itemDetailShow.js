import React from 'react'
import './itemDetailShow.css'
import ItemCount from '../itemCount/itemCount'
import {Card, Container, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

 function ItemDetailShow({item={}}) {
     
    return (
        <Container className='itemContainer'>
            <Card>
                <Card.Body>
                <Button variant="warning">
                    <NavLink to="/category">Volver a la lista</NavLink>
                </Button>
                    <Card.Title>Nombre: {item.title}</Card.Title>
                    <Card.Text>Descripcion: {item.description}</Card.Text>
                    <Card.Text>Precio: {item.price}</Card.Text>
                    <Card.Img src={item.url} className= 'imgRaton' />
                    <ItemCount />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ItemDetailShow
