import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART_UNITS} from "../types/CartTypes";

export const addToCart = ({id, name, price, units=1}) =>{
    return {
        type: ADD_TO_CART,
        payload: {id, name, price, units}
    }
}

export function updateItemUnits({id, units}) {
    return {
        type: UPDATE_CART_UNITS,
        payload: {id, units}
    }
}

export function deleteFromCart(farm) {
    return {
        type: DELETE_FROM_CART,
        payload: farm
    }
}                
