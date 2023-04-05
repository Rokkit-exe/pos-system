import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    clients: [],
    active: false,
    subTotal: 0,
    total: 0,
    activationDate: "",
    closingDate: "",
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setTableId: (state, action) => {
            state.id = action.payload
        },
        updateTableClients: (state, action) => {
            state.clients = [...state.clients, action.payload]
        },
        setTableSubTotal: (state, action) => {
            state.subTotal = action.payload
        },
        setTableTotal: (state, action) => {
            state.total = action.payload
        },
        activateTable: (state) => {
            state.active = true
            state.activationDate = new Date.now()
        },
        closeTable: (state) => {
            state.active = false
            state.closingDate = new Date.now()
        }
    }
})

export const { setId, updateClients, toggleActive } = tableSlice.actions
export default tableSlice.reducer