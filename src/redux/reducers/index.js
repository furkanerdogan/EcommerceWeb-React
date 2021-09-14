import { combineReducers } from 'redux'

import { productReducers, productDetailsReducers } from './productReducers'
import { cartReducer } from './basketReducer'
import { favoriteReducer } from './favoriteReducer'

const rootReducer = combineReducers({
    productList: productReducers,
    productDetails: productDetailsReducers,
    productBasket: cartReducer,
    productFavorite: favoriteReducer

});
export default rootReducer;

