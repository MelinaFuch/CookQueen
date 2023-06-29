import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipes/recipeSlice";
import { recipeApi } from "./recipes/recipeApi";

export const store = configureStore({
    reducer: {
    recipe: recipeReducer,
        [recipeApi.reducerPath]: recipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
        .concat(recipeApi.middleware)
});