import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [], 
  reducers: {
    addProduct: (state, action) => {
      return [...state, { ...action.payload, isPurchased: false }];
    },

    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    },
    editProduct: (state, action) => {
      const { id, name, number, isPurchased } = action.payload;
      const productToEdit = state.find(product => product.id === id);
      if (productToEdit) {
        productToEdit.name = name;
        productToEdit.number = number;
        productToEdit.isPurchased = isPurchased;
      }
    },
  },
});

export default productSlice.reducer;
export const { addProduct, removeProduct, editProduct } = productSlice.actions;