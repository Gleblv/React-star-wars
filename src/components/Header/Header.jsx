import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const activeStyle = {
        'border': '2px solid #ae70c2',
        'color': '#ae70c2',
        'text-shadow': 'none'
    }

    return (
        <div className="header__container">
            <nav className="header__navigation navigation">
                <ul className="navigation__links">
                    <li className="navigation__link"><NavLink to='/'>Home</NavLink></li>
                    <li className="navigation__link"><NavLink to='/people'>People</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;