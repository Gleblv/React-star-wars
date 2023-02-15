import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="header__container">
            <nav className="header__navigation navigation">
                <ul className="navigation__links">
                    <li className="navigation__link"><NavLink to='/'>Home</NavLink></li>
                    <li className="navigation__link"><NavLink to='/people/?page=1'>People</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;