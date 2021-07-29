import './navbar.css'
import { CartWidget } from './cartWidget/cartWidget.js'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <header className='navbar'>
            <h1 className='catfour'>CATFOUR</h1>
            <ul className='topbar'>
                <li>
                    <NavLink to='/category'>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/item'>Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>Nuestros gatitos
                    </NavLink>
                </li>
                <CartWidget />  
            </ul>
            

        </header>
    )
}