import { getListCateGory, getListProduct, getProductByCateGory, getProductByID } from "../../api";
import { getListCategoryFail, getListCategorySuccess, getListProductFail, getListProductSuccess, getProductByCategoryFail, getProductByCategorySuccess, getProductByIDFail, getProductByIDSuccess, getRequest } from "../actions/productActions";

export const getRequestListCategory = () => {
    return async dispatch => {
        try {
            const res = await getListCateGory();
            dispatch(getListCategorySuccess(res?.data?.content));
        }
        catch (error) {
            console.log(error);
            dispatch(getListCategoryFail());
        }
    }
}
export const getRequestProductByCategory = (id) => {
    return async dispatch => {
        try {
            const res = await getProductByCateGory(id);
            dispatch(getProductByCategorySuccess(res?.data?.content));
        }
        catch (error) {
            console.log(error);
            dispatch(getProductByCategoryFail());
        }
    }
}
export const getRequestListProduct = () => {
    return async dispatch => {
        try {
            const res = await getListProduct();
            dispatch(getListProductSuccess(res?.data?.content));
        }
        catch (error) {
            console.log(error);
            dispatch(getListProductFail());
        }
    }
}
export const getRequestProductByID = (id) => {
    return async dispatch => {
        try {
            const res = await getProductByID(id);
            dispatch(getProductByIDSuccess(res?.data?.content));
        }
        catch (error) {
            console.log(error);
            dispatch(getProductByIDFail());
        }
    }
}