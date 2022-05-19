import { createSlice, configureStore } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: {}
  },
  reducers: {
    setProduct: (state, action) => {
      if (action.payload.categories) {
        localStorage.setItem('searchedCategories', action.payload.categories.toString())
      } else {
        localStorage.setItem('searchedCategories', '')
      }
      state.value = action.payload;
    }
  }
})

export const { setProduct } = productSlice.actions

export default configureStore({
  reducer: {
    product: productSlice.reducer
  }
})