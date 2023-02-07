import { useState, useEffect } from 'react';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import { API_PEOPLE } from '../../constants/api';
import { getApiResourse } from '../../utils/network';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';

import './PeoplePage.css';

const PeoplePage = () => {
    const [peopl, setPeople] = useState(null);

    const getResourse = async (url) => {
        const res = await getApiResourse(url);

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
    }

    useEffect(() => {
        getResourse(API_PEOPLE);
    }, [])

    return (
        <>
        {peopl && <PeopleList peopl={peopl}/>}
        </>
    )
}

export default PeoplePage;