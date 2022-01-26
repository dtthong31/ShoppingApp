import {
    GET_LIST_CATEGORY,
    GET_LIST_CATEGORY_FAIL,
    GET_LIST_CATEGORY_SUCCESS,
    GET_LIST_PRODUCT_FAIL,
    GET_LIST_PRODUCT_SUCCESS,
    GET_PRODUCT_BY_CATEGORY_FAIL,
    GET_PRODUCT_BY_CATEGORY_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_FAVORITE_SUCCESS,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    SET_TOKEN
} from "../actions/productActions";

const initialState = {
    isFetching: false,
    product: {},
    listProduct: [],
    listCategory: [],
    listProductByCategory: [],
    user: {},
    token: '',
    productsFavorite: []
}

const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LIST_CATEGORY_SUCCESS:
            return { ...state, isFetching: false, listCategory: payload };
        case GET_LIST_CATEGORY_FAIL:
            return { ...state, isFetching: false };
        case GET_LIST_PRODUCT_SUCCESS:
            return { ...state, isFetching: false, listProduct: payload };
        case GET_LIST_PRODUCT_FAIL:
            return { ...state, isFetching: false };
        case GET_PRODUCT_BY_CATEGORY_SUCCESS:
            return { ...state, isFetching: false, listProductByCategory: payload };
        case GET_PRODUCT_BY_CATEGORY_FAIL:
            return { ...state, isFetching: false };
        case GET_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isFetching: false, product: payload };
        case GET_PRODUCT_BY_ID_FAIL:
            return { ...state, isFetching: false };
        case GET_PROFILE_SUCCESS:
            return { ...state, isFetching: false, user: payload };
        case GET_PROFILE_FAIL:
            return { ...state, isFetching: false };
        case GET_PRODUCT_FAVORITE_SUCCESS:
            return { ...state, isFetching: false, productsFavorite: payload };
        case GET_PROFILE_FAIL:
            return { ...state, isFetching: false };
        case SET_TOKEN:
            return { ...state, isFetching: false, token: payload };
        default:
            return state;
    }
}
export default productReducers;
