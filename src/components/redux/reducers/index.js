import {combineReducers} from 'redux';
import { createStore } from "redux";
import CartReducer from "./CartReducer";

const reducer = combineReducers({
    cart: CartReducer
});

export const store = createStore(reducer);