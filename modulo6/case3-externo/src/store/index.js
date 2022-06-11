import { configureStore , Reducer  } from "@reduxjs/toolkit";

import settingsSlice  from "./settings-slice";
import todoSlice from "./todo-slice";


const store = configureStore({
    reducer: {
        setting: settingsSlice.reducer,
        todo: todoSlice.reducer, 
     },
});







export default store;