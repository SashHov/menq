import {API_URL} from './config';

const getAllProducts = async () => {
    const response = await fetch(API_URL + 'products');
    return response.json();
}

const getFilteredByCategoryProducts = async (catName) => {
    const response = await fetch(API_URL + 'products/' + 'category/' + catName);
    return response.json();
}

const getAllProductById = async (id) => {
    const response = await fetch(API_URL + 'products/' + id);
    return response.json();
}

export {getAllProducts, getFilteredByCategoryProducts, getAllProductById};