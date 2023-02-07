import { SWAPI_PEOPLE, GUIDE_IMG_EXTENSION, URL_IMG_PERSON } from "../constants/api"

const getId = (url, category) => {
    const idArr = url.match(/\d/g);
    const id = idArr.join('');
    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`