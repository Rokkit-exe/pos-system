import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    table: 0,
    client: 0,
    products: [],
    subTotal: 0,
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addId: (state, action) => {
            state.id = action.payload
        },
        addTable: (state, action) => {
            state.table = action.payload
        },
        addClient: (state, action) => {
            state.client = action.payload
        },
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        addSubTotal: (state, action) => {
            state.subTotal = action.payload
        },
        addTotal: (state, action) => {
            state.total = action.payload
        },
    }
})

export const { addId, addTable, addClient, addProduct, addSubTotal, addTotal } = cartSlice.actions
export default cartSlice.reducer