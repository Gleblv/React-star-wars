import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PeopleNavigation.css';

const PeopleNavigation = ({getResourse, prevPage, nextPage, counterPage}) => {
    const onClickNext = () => getResourse(nextPage);

    const onClickPrev = () => getResourse(prevPage);

    return (
        <div className='navigation-buttons'>
            <Link className='nav-link' to={`/people/?page=${counterPage - 1}`}>
                <button onClick={onClickPrev} disabled={!prevPage} className="prev-nav__btn">Previous</button>
            </Link>
            <Link className='nav-link' to={`/people/?page=${counterPage + 1}`}>
                <button onClick={onClickNext} disabled={!nextPage} className="next-nav__btn">Next</button>
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