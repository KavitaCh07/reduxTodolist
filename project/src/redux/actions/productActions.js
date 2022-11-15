// 3 ACTION TO BE CREATED FOR 3 ACTION TYPES OF ACTION-TYPE FILE
// action always 2 things i.e. key as type and payload

import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
