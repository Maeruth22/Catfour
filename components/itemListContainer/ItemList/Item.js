import { useEffect, useState } from "react"


export default function Item () {
    const [item, setItem] = useState ([])

    useEffect(() => {
       const Rascador = [
        {id: 'rascador' ,
        title: 'Rascador' ,
        description: 'Para que rasque en vez de los muebles' ,
        price: 1000},
       ]
    }, [])
}