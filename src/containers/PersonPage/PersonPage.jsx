import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { getApiResourse } from '../../utils/network';
import {API_PERSON} from '../../constants/api'

import './PersonPage.css';

const PersonPage = () => {
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResourse(`${API_PERSON}/${id}`);
            console.log(res);
        })();

    }, [])

    return (
        <>
        <h1>{id}</h1>
        </>
    )
}

export default PersonPage;