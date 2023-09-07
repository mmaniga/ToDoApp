import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./components/todoSlice";

export const Store = configureStore({
    reducer: {
        todos: todoSlice
    },
})