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