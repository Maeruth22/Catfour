import React from 'react'
import {useEffect, useState} from 'react'
import ItemList from '../itemListContainer/ItemList/ItemList'
import {ItemDetail} from './itemDetail'
import ItemDetailShow from './itemDetailShow'



function ItemDetailContainer() {
    const [item, setItem] = useState({})

    useEffect(() => {
        ItemDetail()
        .then(res => setItem(res))
    }, [])

    return (
        <>
            <ItemDetailShow item={item} key={item.id} />
            

        </>
    )
}

export default ItemDetailContainer