import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";
import filterSlice from "./filterSlice";

const store = configureStore(
    {
        reducer: {
            countryList: countrySlice.reducer,
            filters: filterSlice.reducer
        }
    }
)

export default store