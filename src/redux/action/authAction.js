import  firebase,{auth}from "firebase/app";
import { LOG_IN,LOG_OUT,REGISTER } from "./types"

export const logIn = (email,password) => async (dispatch) => {

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => { dispatch({ type: LOG_IN, payload: }); });
         } catch (error) {
        console.log(error);
            }

    try {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => { dispatch({ type: PRODUCT_LIST_SUCCES, payload: res.data }); });

    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })

    }
}