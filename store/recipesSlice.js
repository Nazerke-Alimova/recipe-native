import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipe } from "../lib/getRecipe";

const initialState = {
  recipes: [],
  loaded: false,
};
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (activeCategory) => {
    const res = await getRecipe(activeCategory);
    return res;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loaded = false;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
      state.loaded = true;
      //console.log(action.payload);
    });
  },
});
export default recipeSlice.reducer;
