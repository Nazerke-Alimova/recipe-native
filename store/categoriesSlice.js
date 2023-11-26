import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../lib/getCategories";

const initialState = {
  activeCategory: "",
  categories: [],
  loaded: false,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await getCategories();
    return res;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { ...initialState },
  reducers: {
    updateActivityCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loaded = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.activeCategory = action.payload[0].strCategory;
      state.loaded = true;
      //console.log(action.payload[0].strCategory);
    });
  },
});
export const { updateActivityCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
