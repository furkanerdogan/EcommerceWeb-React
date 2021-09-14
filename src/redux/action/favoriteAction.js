import axios from "axios";
import { FAVORITE_ADD_ITEM, FAVORITE_REMOVE_ITEM } from "./types";

const addToFavorite = (productId, quantity) => async (dispatch, getState) => {
    await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res => { dispatch({ type: FAVORITE_ADD_ITEM, payload: res.data }); });


}
const removeToFavorite = (data, item) => async (dispatch, getState) => {

    let removeOneItem = data.slice();
    removeOneItem = removeOneItem.filter(a => a.id !== item.id)
    console.log("removeOneItem", removeOneItem);

    dispatch({
        type: FAVORITE_REMOVE_ITEM,
        payload: removeOneItem,
    });


}




export { addToFavorite, removeToFavorite };