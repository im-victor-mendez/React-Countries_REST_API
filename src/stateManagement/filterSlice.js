import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: 'Filter by Region',
    search: ''
}

const filterSlice = createSlice(
    {
        name: 'filterSlice',
        initialState,
        reducers: {
            setFilter: (state, action) => {
                return {
                    ...state,
                    filter: action.payload
                }
            },
            setSearch: (state, action) => {
                return {
                    ...state,
                    search: action.payload
                }
            }
        }
    }
)

export const { setFilter, setSearch } = filterSlice.actions

export default filterSlice