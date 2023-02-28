/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import './PeopleList.css';

const PeopleList = ({peopl}) => {
    return (
        <ul className='people__list'>
            {peopl.map(({name, img, id}) => {
                return (
                    <li className='people__item item-people' key={uuidv4()}>
                        <Link to={`/people/${id}`} className="item__people-link">
                            <div className='item-people__image'>
                                <img src={img} alt={name} />
                            </div>
                            <div className='item-people__name'>
                                {name}
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

PeopleList.propTypes = {
    peopl: PropTypes.array
}

export default PeopleList;
