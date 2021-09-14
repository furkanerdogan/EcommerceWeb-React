import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../action/types";
const initialState = {
    productInBasket: []
};

export const cartReducer = (state = initialState, action) => {
    console.log("*******", state.productInBasket);

    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            // const existItem = state.productInBasket.find((x) => x.product === item.product);
            // if (existItem) {
            //     return {
            //         ...state,
            //         error: '',
            //         productInBasket: state.productInBasket.map((x) =>
            //             x.product === existItem.product ? item : x
            //         ),
            //     };
            // } else {
            //     return { ...state, error: '', productInBasket: [...state.productInBasket, item] };
            // }
            return { ...state, error: '', productInBasket: [...state.productInBasket, item] };

        case CART_REMOVE_ITEM:
            console.log(" action.payload.removeOneItem", action.payload.removeOneItem);

            return {
                ...state,
                productInBasket: action.payload.slice(),

            };

        default:
            return state;
    }
};