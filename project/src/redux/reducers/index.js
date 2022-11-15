
//combining multiple reducer
import {combineReducers} from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    // we can define any key which is allProducts
    allProducts: productReducer,
});

export default reducers;

//action, actionTypes,reducer, combinedReducers created