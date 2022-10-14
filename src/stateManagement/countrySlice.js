import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const countrySlice = createSlice(
    {
        name: 'countrySlice',
        initialState,
        reducers: {
            setList: (state, action) => {
                action.payload.map(
                    country => {
                        state.push(country)
                    }
                )
            }
        }
    }
)

export const { setList } = countrySlice.actions

export default countrySlice