import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
        const response = await fakeStoreApi.get("/products");
        dispatch(
            {
                type: ActionTypes.FETCH_PRODUCT,
                payload: response.data
            }
        );
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch(
        {
            type: ActionTypes.FETCH_SELECTED_PRODUCT,
            payload: response.data
        }
    );
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}

export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}