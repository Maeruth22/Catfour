import './itemListContainer.css';
import '../itemCount/itemCount';

import ItemList from './ItemList/ItemList';


export const ItemListContainer = (props) => {
    console.log(props);
    
    return (
    <div>
        
        <h2>{props.titulo}</h2>
        
        <ItemList />

    </div>
    )
}