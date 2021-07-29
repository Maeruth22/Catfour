import React from 'react'
import ItemList from '../itemListContainer/ItemList/ItemList'

  const item={
    id: 'raton',
    title: 'Ratón',
    price: 200,
    description: 'Un ratón juguetón',
    url: 'https://cdn.pixabay.com/photo/2019/12/26/15/00/new-years-eve-4720578_960_720.jpg'
}

const task = new Promise ((res)=>{
    res(item)
}, 2000)

export const ItemDetail = () => {
    return (
        
            task
        
    )
}
export default ItemDetail