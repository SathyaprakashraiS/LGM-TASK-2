import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(){


return(
    <nav className="navbar">
            <ul>
                <li className='nav-item'>
                    <Link to="/" className="navbar-links">
                        HOME
                    </Link>
                </li>
            </ul>
        
    </nav>
    );
}

export default Navbar;
