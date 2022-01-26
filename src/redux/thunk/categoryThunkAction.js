import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getListCateGory,
    getListProduct,
    getProductByCateGory,
    getProductByID,
    getProductFavorite,
    getProfileByToken,
    setLikeProduct,
    setUnLikeProduct,
    submitTokenFacebook
} from "../../api";
import {
    getListCategoryFail,
    getListCategorySuccess,
    getListProductFail,
    getListProductSuccess,
    getProductByCategoryFail,
    getProductByCategorySuccess,
    getProductByIDFail,
    getProductByIDSuccess,
    getProfileSuccess,
    getProfileFail,
    getProductFavoriteSuccess,
    getProductFavoriteFail,
    setTokenSuccess
} from "../actions/productActions";

export const setRequestLoginFB = (facebookToken) => {
    return async dispatch => {
        try {
            console.log("fb111", facebookToken);
            const res = await submitTokenFacebook(facebookToken);
            dispatch(setTokenSuccess(res?.data?.content?.accessToken));
        }
        catch (error) {
            console.log("Login fb ", error);
        }
    }
}
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
export const getRequestProfile = (token) => {
    return async dispatch => {
        try {
            const res = await getProfileByToken(token);
            dispatch(getProfileSuccess(res?.data?.content));
        }
        catch (error) {
            console.log(error);
            dispatch(getProfileFail());
        }
    }
}
export const getRequestProductFavorite = (token) => {
    return async dispatch => {
        try {
            console.log("favorite", token);
            const res = await getProductFavorite(token);
            dispatch(getProductFavoriteSuccess(res?.data?.content?.productsFavorite));
        }
        catch (error) {
            console.log(error);
            dispatch(getProductFavoriteFail());
        }
    }
}
export const setRequestLikeproduct = (payload) => {
    return async dispatch => {
        try {

            const res = await setLikeProduct(payload);
            console.log(res.status);
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const setRequestUnLikeproduct = (payload) => {
    return async dispatch => {
        try {

            const res = await setUnLikeProduct(payload);
            console.log(res.status);
        }
        catch (error) {
            console.log(error);
        }
    }
}
