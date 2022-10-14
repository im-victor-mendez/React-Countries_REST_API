import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: 'Filter by Region'
}

const filterSlice = createSlice(
    {
        name: 'filterSlice',
        initialState,
        reducers: {
            setFilter: (state, action) => {
                state.filter = action.payload
            }
        }
    }
)

export const { setFilter } = filterSlice.actions

export default filterSlice