import { useState, useEffect } from 'react';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import withErrorApi from '../../hoc-helpers/withErrorApi';

import { API_PEOPLE } from '../../constants/api';
import { getApiResourse } from '../../utils/network';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';

import './PeoplePage.css';

const PeoplePage = ({setErrorApi}) => {
    const [peopl, setPeople] = useState(null);

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
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
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

export default withErrorApi(PeoplePage);