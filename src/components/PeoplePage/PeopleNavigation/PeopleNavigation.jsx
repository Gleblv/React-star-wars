import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PeopleNavigation.css';

const PeopleNavigation = ({getResourse, prevPage, nextPage, counterPage}) => {
    return (
        <div className='navigation-buttons'>
            <Link to={`/people/?page=${counterPage - 1}`}>
            <button className="prev-nav__btn">Previous</button>
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`}>
            <button className="next-nav__btn">Next</button>
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