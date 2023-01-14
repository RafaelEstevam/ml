import { createSlice, configureStore } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false
  },
  reducers: {
    setShowLoading: (state, action) => {
      const {show} = action.payload;
      state.value = show;
    },
  }
})

export const { setShowLoading } = loadingSlice.actions

export default configureStore({
  reducer: {
    loading: loadingSlice.reducer
  }
})