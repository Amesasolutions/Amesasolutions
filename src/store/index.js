import { configureStore } from "@reduxjs/toolkit";
import { ItemSlice } from "./api/ItemsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [ItemSlice.reducerPath]: ItemSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ItemSlice.middleware),
})

setupListeners(store.dispatch)
