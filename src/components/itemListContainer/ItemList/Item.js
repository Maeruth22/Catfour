import { useState } from "react"


export default function Item () {
    const [item, setItem] = useState ([]);

        const Rascador = {
            id: 'rascador' ,
            title: 'Rascador' ,
            description: 'Para que rasque en vez de los muebles' ,
            price: 1000,
            };
        const Torre = {
            id: 'torre' ,
            title: 'Torre' ,
            description: 'Para que mire toda la casa',
            price: 3000
            };
        const Transportador = {
            id: 'transportador' ,
            title:'Transportador' ,
            description: 'Para llevarlo a todos lados' ,
            price: 2000
            };


return (
    <>
    
    <div>
        <h1>{Rascador.title}</h1>
        <div>{Rascador.description}</div>
        <div>{Rascador.price}</div>
    </div>
    <div>
        <h1>{Torre.title}</h1>
        <div>{Torre.description}</div>
        <div>{Torre.price}</div>
    </div>
    <div>
        <h1>{Transportador.title}</h1>
        <div>{Transportador.description}</div>
        <div>{Transportador.price}</div>
    </div>
   </>
)
}