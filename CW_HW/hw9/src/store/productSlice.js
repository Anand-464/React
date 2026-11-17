import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        hasFetched: false
    },
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload;
            state.hasFetched = true;
        },
        clearProducts: (state) => {
            state.productList = [];
            state.hasFetched = false;
        }
    }
});

export const { setProducts, clearProducts } = productSlice.actions;
export default productSlice.reducer;