import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { open: false };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open(state) {
      state.open = true;
    },
    close(state) {
      state.open = false;
    },
  },
});

const store = configureStore({ reducer: modalSlice.reducer });

export default store;

export const modalActions = modalSlice.actions;
