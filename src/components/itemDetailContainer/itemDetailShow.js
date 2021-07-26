import React from 'react'
import './itemDetailShow.css'

 function ItemDetailShow({item={}}) {
     console.log(item)
    return (
        <div>
            <h3>Nombre: {item.name}</h3>
            <p>Descripcion: {item.description}</p>
            <p>Precio: {item.price}</p>
            <img src={item.url} className= 'imgRaton' />
        </div>
    )
}

export default ItemDetailShow
