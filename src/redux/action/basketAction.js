import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./types";

const addToCart = (productId, quantity) => async (dispatch, getState) => {
    await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res => { dispatch({ type: CART_ADD_ITEM, payload: res.data }); });


}
const removeToCart = (data, item) => async (dispatch, getState) => {
    console.log("data", data);

    console.log("item", item);
    let removeOneItem = data.slice();
    removeOneItem = removeOneItem.filter(a => a.id !== item.id)
    console.log("removeOneItem", removeOneItem);

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: removeOneItem,
    });


}




export { addToCart, removeToCart };