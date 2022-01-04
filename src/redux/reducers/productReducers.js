import { GET_LIST_CATEGORY, GET_LIST_CATEGORY_FAIL, GET_LIST_CATEGORY_SUCCESS, GET_LIST_PRODUCT_FAIL, GET_LIST_PRODUCT_SUCCESS, GET_PRODUCT_BY_CATEGORY_FAIL, GET_PRODUCT_BY_CATEGORY_SUCCESS, GET_PRODUCT_BY_ID_FAIL, GET_PRODUCT_BY_ID_SUCCESS, ISFETCHING } from "../actions/productActions";

const initialState = {
    isFetching: false,
    product: {},
    listProduct: [],
    listCategory: [],
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
            return { ...state, isFetching: false, listProduct: payload };
        case GET_PRODUCT_BY_CATEGORY_FAIL:
            return { ...state, isFetching: false };
        case GET_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isFetching: false, product: payload };
        case GET_PRODUCT_BY_ID_FAIL:
            return { ...state, isFetching: false };
        default:
            return state;
    }
}
export default productReducers;
