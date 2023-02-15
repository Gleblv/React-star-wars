
/**
 * Изменяет utl с HTTP на HTTPS
 * @param {String} url - для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace('http://', 'https://') : url;
    return result;
}

export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch(error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}