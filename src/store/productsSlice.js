import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
});
