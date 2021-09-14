import { FAVORITE_ADD_ITEM, FAVORITE_REMOVE_ITEM } from "../action/types";
const initialState = {
    productInFavorite: []
};

export const favoriteReducer = (state = initialState, action) => {

    switch (action.type) {
        case FAVORITE_ADD_ITEM:
            const item = action.payload;

            return { ...state, error: '', productInFavorite: [...state.productInFavorite, item] };

        case FAVORITE_REMOVE_ITEM:

            return {
                ...state,
                productInFavorite: action.payload.slice(),

            };

        default:
            return state;
    }
};