import {useState, useEffect} from 'react';
/*import Item from './Item'*/

export default function ItemList () {
    const [itemList, setItemList] = useState ([])
    
    useEffect(() => {
        const items = [
            {id: 'rascador' , title: 'Rascador' , description: 'Para que rasque en vez de los muebles' , price: 1000},
            {id: 'torre' , title: 'Torre' , description: 'Para que mire toda la casa', price: 3000},
            {id: 'transportador' , title:'Transportador' , description: 'Para llevarlo a todos lados' , price: 2000}
        ]
        const getPromiseTask = () => {
            return task
        }
        const task = new Promise ((resuelto, rechazado)=>{
            let status=200
            if(status===200){
    
                setTimeout(()=>{
                    resuelto(items)
                },2000)
            }else{
                rechazado('rechazado')
            }
        }
        )
        getPromiseTask ()
        .then((respuesta)=> setItemList(respuesta))
        .catch(error => {console.log('Hubo un error')})
        .finally(console.log ('Ejecuta finally'))
    }, [])
    console.log(itemList)
    return (
        <div>
        { itemList.map((items)=> <p key={items.id}>{items.title}</p> ) }
        </div>
    )
       
}