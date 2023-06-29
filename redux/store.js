import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import { recipeApi } from "./recipesApi";

export const store = configureStore({
    reducer: {
    recipe: recipeReducer,
        [recipeApi.reducerPath]: recipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
        .concat(recipeApi.middleware)
});