export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL';
export const GET_LIST_CATEGORY_SUCCESS = 'GET_LIST_CATEGORY_SUCCESS';
export const GET_LIST_CATEGORY_FAIL = 'GET_LIST_CATEGORY_FAIL';
export const GET_LIST_PRODUCT_SUCCESS = 'GET_LIST_PRODUCT_SUCCESS';
export const GET_LIST_PRODUCT_FAIL = 'GET_LIST_PRODUCT_FAIL';
export const GET_PRODUCT_BY_CATEGORY_SUCCESS = 'GET_PRODUCT_BY_CATEGORY_SUCCESS';
export const GET_PRODUCT_BY_CATEGORY_FAIL = 'GET_PRODUCT_BY_CATEGORY_FAIL';
export const GET_PRODUCT_BY_ID_FAIL = 'GET_PRODUCT_BY_ID_FAIL';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';

// get list category
export const getListCategorySuccess = (listCategory) => ({
    type: GET_LIST_CATEGORY_SUCCESS,
    payload: listCategory,
})
export const getListCategoryFail = () => ({
    type: GET_LIST_CATEGORY_FAIL,
})
// get list product by category
export const getProductByCategorySuccess = (listCategory) => ({
    type: GET_PRODUCT_BY_CATEGORY_SUCCESS,
    payload: listCategory,
})
export const getProductByCategoryFail = () => ({
    type: GET_PRODUCT_BY_CATEGORY_FAIL,
})
// get list product
export const getListProductSuccess = (listProduct) => ({
    type: GET_LIST_PRODUCT_SUCCESS,
    payload: listProduct,
})
export const getListProductFail = () => ({
    type: GET_LIST_PRODUCT_FAIL,
})
// get list product by id
export const getProductByIDSuccess = (listProduct) => ({
    type: GET_PRODUCT_BY_ID_SUCCESS,
    payload: listProduct,
})
export const getProductByIDFail = () => ({
    type: GET_PRODUCT_BY_ID_FAIL,
})
export const getRequestSuccess = () => ({ type: FETCHING_DATA_SUCCESS });
export const getRequestFail = () => ({ type: FETCHING_DATA_FAIL });
export const getRequest = () => ({ type: FETCHING_DATA });