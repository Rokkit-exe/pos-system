import { createSlice, createReducer } from '@reduxjs/toolkit'

const initialState = {
    id: 1,
    name: "Frank",
    cart: ["1", "2", "3"],
    articles: ["4", "5", "6"],
    active: false,
}
export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClientId: (state, action) => {
            state.id = action.payload
        },
        setClientName: (state = "", action) => {
            state.name = action.payload
        },
        addItemToCart: (state = [], action) => {
            state.cart = [...state.cart, action.payload]
        },
        addItemToArticles: (state = [], action) => {
            state.articles = [...state.articles, action.payload]
        },
        toggleActive: (state) => {
            state.active = !state.active
        },
    },
})

export const { setClientId, setClientName, addItemToCart, addItemToArticles, toggleActive } = clientSlice.actions
export default clientSlice.reducer
