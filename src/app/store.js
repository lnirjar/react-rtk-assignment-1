import { configureStore } from "@reduxjs/toolkit";
import componentBReducer from "../features/componentB/componentBSlice";

const store = configureStore({
    reducer: {
        componentB: componentBReducer,
    }
})

export default store;