//reducer always take initial state and action
// reducer takes 2 parameters state and action

import { ActionTypes } from "../constants/action-types";


//create state for reducer 
const initialState = {
    products:[
        {
            id : 1,
            title : "cloth",
            category: "program",
        },
    ],
};

//action is type and payload
export const productReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
            
        default:
            return state;
    }
};