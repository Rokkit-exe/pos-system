import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    name: "",
    price: 0,
    type: "",
    note: "",
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setType: (state, action) => {
            state.type = action.payload
        }
    }
})

export const { setId, setName, setPrice, setType } = itemSlice.actions
export default itemSlice.reducer
