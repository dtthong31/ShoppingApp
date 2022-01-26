import axios from "axios";

export const getListCateGory = () => {
    return axios({ method: 'GET', url: `http://svcy3.myclass.vn/api/Product/getAllCategory` });
}
export const getProductByCateGory = (id) => {
    return axios({ method: 'GET', url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${id}` });
}
export const getListProduct = () => {
    return axios({ method: 'GET', url: `http://svcy3.myclass.vn/api/Product` });
}
export const getProductByID = (id) => {
    return axios({ method: 'GET', url: `http://svcy3.myclass.vn/api/Product/getbyid?id=${id}` });
}
export const getProfileByToken = (token) => {
    console.log("token profile", token);
    return axios({
        method: 'POST',
        url: `http://svcy3.myclass.vn/api/Users/getProfile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const getProductFavorite = (token) => {
    return axios({
        method: 'GET',
        url: `http://svcy3.myclass.vn//api/Users/getproductfavorite`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const setLikeProduct = (payload) => {
    return axios({
        method: 'GET',
        url: `http://svcy3.myclass.vn/api/Users/like?productId=${payload.id}`,
        headers: {
            Authorization: `Bearer ${payload.token}`
        }
    });
}
export const setUnLikeProduct = (payload) => {
    return axios({
        method: 'GET',
        url: `http://svcy3.myclass.vn/api/Users/unlike?productId=${payload.id}`,
        headers: {
            Authorization: `Bearer ${payload.token}`
        }
    });
}
export const submitFormLogin = async (email, password) => {
    return await axios({
        method: 'post',
        url: 'http://svcy3.myclass.vn/api/Users/signin',
        data: {
            email,
            password
        }
    });
}
export const submitTokenFacebook = async (facebookToken) => {
    return await axios({
        method: 'post',
        url: 'http://svcy3.myclass.vn//api/Users/facebooklogin',
        body: {
            facebookToken: facebookToken
        }
    });
}