import { useState } from "react"



export default function ItemCount() {
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemName, setItemName] = useState('Rascador');
    const [itemStock, setItemStock] = useState(5);

    const handleSum = () => {

        if (itemQuantity<itemStock) {
            setItemQuantity(itemQuantity + 1)
        }
    }

    const handleSub = () => {

        if (itemQuantity>0) {
            setItemQuantity(itemQuantity - 1)
        }
    }
    return (
        <div>
            <h2>{itemName}</h2>
            <h3>Stock disponible: {itemStock}</h3>
            <p>{itemQuantity}</p>
            <button onClick={handleSum} >
                Agregar al carrito
            </button>
            <button onClick={handleSub}>
                Quitar del carrito
            </button>
        </div>
    )
}