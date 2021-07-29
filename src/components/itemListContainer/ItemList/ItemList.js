import {useState, useEffect} from 'react';
import Item from './Item'
import {useParams} from 'react-router-dom';


export default function ItemList () {
    const [itemList, setItemList] = useState ([]);

    const {categoryId} = useParams();
    
    useEffect(() => {
        const items = [
            {id: 'rascador' , title: 'Rascador' , description: 'Para que rasque en vez de los muebles' , price: 1000, category:'rascadores' , url: 'https://cdn.pixabay.com/photo/2017/01/31/19/04/cat-2026479_960_720.jpg'},
            {id: 'torre' , title: 'Torre' , description: 'Para que mire toda la casa', price: 3000, category:'rascadores' , url:'https://cdn.pixabay.com/photo/2019/11/25/09/11/cat-4651385_960_720.jpg'},
            {id: 'transportador' , title:'Transportador' , description: 'Para llevarlo a todos lados' , price: 2000, category:'transportadores' , url:'https://cdn.pixabay.com/photo/2020/04/15/16/16/cat-5047346_960_720.jpg'},
            {id: 'fuente' , title: 'Fuente de agua' , description: 'Para que sienta que toma de un manantial' , price: 2000 , category: 'fuentes' , url:'https://media.istockphoto.com/photos/thirsty-tabby-cat-drinking-water-from-a-pet-drinking-fountain-side-picture-id1061642872?s=612x612'},
            {id: 'bolson' , title: 'Bolson transportador' , description: 'Bolson para transladarlo' , price:1000 , category:'transportadores' , url:'https://cdn.pixabay.com/photo/2012/03/02/00/39/cat-20841_960_720.jpg'},
            {id: 'raton', title: 'Ratón', description: 'Un ratón juguetón', price: 200, category: 'juguetes' , url: 'https://cdn.pixabay.com/photo/2019/12/26/15/00/new-years-eve-4720578_960_720.jpg' },
        
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
       /*  categoryId ()
        ? items.then (resuelto => {
            setItemList(resuelto.filter(i => i.category === categoryId));
        })
        : items.then(resuelto =>{
            setItemList(resuelto);
        });*/
     

    return (
        <div>
         { itemList.map((item)=> <Item key={item.id} title={item.title} description={item.description} price={item.price} img={item.url}/> ) }
        </div>
    )
       
}