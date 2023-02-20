import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UINavButton from '../../UI/UINavButtons/UINavButton';

import './PeopleNavigation.css';

const PeopleNavigation = ({getResourse, prevPage, nextPage, counterPage}) => {
    const onClickNext = () => getResourse(nextPage);

    const onClickPrev = () => getResourse(prevPage);

    const darkBtnTheme = 'dark-nav__btn',
          lightBtnTheme = 'light-nav__btn';

    return (
        <div className='navigation-buttons'>
            <Link className='nav-link' to={`/people/?page=${counterPage - 1}`}>
                <UINavButton 
                    text={'Previous'}
                    onClick={onClickPrev} 
                    disabled={!prevPage}  
                    theme={darkBtnTheme}
                />
            </Link>
            <Link className='nav-link' to={`/people/?page=${counterPage + 1}`}>
                <UINavButton 
                    text={'Next'}
                    onClick={onClickNext} 
                    disabled={!nextPage}  
                />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResourse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation;