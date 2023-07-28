import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./recipes/recipeSlice";
import { recipeApi } from "./recipes/recipeApi";
import { userApi } from "./users/userApi";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(recipeApi.middleware)
      .concat(userApi.middleware),
});
