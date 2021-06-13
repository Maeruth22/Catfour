import './navbar.css'
import { CartWidget } from './cartWidget/cartWidget.js'



export const Navbar = () => {
    return (
        <header className='navbar'>
            <h1 className='catfour'>CATFOUR</h1>
            <ul className='topbar'>
                <li>
                    <a href=''>Home
                    </a>
                </li>
                <li>
                    <a href=''>Productos
                    </a>
                </li>
                <li>
                    <a href=''>Nosotros
                    </a>
                </li>
                <li>
                    <a href=''>Nuestros gatitos
                    </a>
                </li>
                <CartWidget />  
            </ul>
            

        </header>
    )
}