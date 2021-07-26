
import './App.css';
import './components/navbar/navbar';
import {Navbar} from './components/navbar/navbar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {ItemDetail} from './components/itemDetailContainer/itemDetail';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
   <>
      <Navbar />
      <ItemListContainer titulo="Bienvenido a Catfour" />
      <ItemDetailContainer />
          </>
  );
}

export default App;
