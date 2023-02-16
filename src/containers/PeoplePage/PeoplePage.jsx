/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';
import withErrorApi from '../../hoc-helpers/withErrorApi';

import { changeHTTP } from '../../utils/network';
import { useQueryParams } from '../../hooks/useQueryParams/useQueryParams';
import { API_PEOPLE } from '../../constants/api';
import { getApiResourse } from '../../utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';

import './PeoplePage.css';

const PeoplePage = ({setErrorApi}) => {
    const [peopl, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(null);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResourse = async (url) => {
        const res = await getApiResourse(url);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {
                    id,
                    name,
                    url,
                    img
                }
            });
    
            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResourse(API_PEOPLE + queryPage);
    }, [])

    return (
        <>
        <PeopleNavigation
            getResourse={getResourse}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
        />
        {peopl && <PeopleList peopl={peopl}/>}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);