import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCES } from "../action/types"


const initialState = {
    products: [],
    isLoading: true,
    myerror: false,

    productsDetails: {},
    myerrorDetails: false,
    isLoadingDetails: true,
}


const productReducers = (state = initialState, action) => {

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, isLoading: true };
        case PRODUCT_LIST_SUCCES:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            };
        case PRODUCT_LIST_FAIL:
            return { ...state, isLoading: false, myerror: true };
        default:
            return state;
    }
};
export { productReducers };

const productDetailsReducers = (state = initialState, action) => {
    console.log("productDetailsReducers action.payload", action.payload);


    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, isLoadingDetails: true };
        case PRODUCT_DETAILS_SUCCES:
            return {
                ...state,
                isLoadingDetails: false,
                productsDetails: action.payload
            };
        case PRODUCT_DETAILS_FAIL:
            return { ...state, isLoadingDetails: false, myerrorDetails: true };
        default:
            return state;
    }
};
export { productDetailsReducers };