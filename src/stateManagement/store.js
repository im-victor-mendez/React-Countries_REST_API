import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";

const store = configureStore(
    {
        reducer: {
            countryList: countrySlice.reducer
        }
    }
)

export default store