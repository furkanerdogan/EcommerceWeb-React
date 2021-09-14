import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCES } from "./types"
import axios from "axios"

export const listproducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => { dispatch({ type: PRODUCT_LIST_SUCCES, payload: res.data }); });

    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })

    }
}


export const detailsProduct = (productId) => async (dispatch) => {

    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: productId,

    });
    try {
        await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => { dispatch({ type: PRODUCT_DETAILS_SUCCES, payload: res.data }); });


    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })

    }
}