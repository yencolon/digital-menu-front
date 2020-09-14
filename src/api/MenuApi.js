import { API_URL } from 'shared/apiUrl';

const prefix = 'api/menus/';

export const getMenu = async () => {
    await fetch(API_URL + prefix + '?_embed=categories')
        .then(resp => {
            return resp;
        }).then(resp => resp.json())
        .catch(e => { return [] });
};

export const getStyle = () => {
    return fetch(API_URL + 'styles');
};
