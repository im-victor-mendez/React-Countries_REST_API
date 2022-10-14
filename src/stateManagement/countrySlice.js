import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const countrySlice = createSlice(
    {
        name: 'countrySlice',
        initialState,
        reducers: {
            setList: (state, action) => {
                return action.payload
            }
        }
    }
)

export const { setList } = countrySlice.actions

export default countrySlice