import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: [],
  reducers: {
    setRecipes: (state, action) => {
      return action.payload; // Actualiza el estado con las recetas filtradas
    },
  },
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
