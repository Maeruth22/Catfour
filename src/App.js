
import './App.css';
import './components/navbar/navbar';
import {Navbar} from './components/navbar/navbar';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
          <Navbar />
          <ItemListContainer />
    </div>
  );
}

export default App;
