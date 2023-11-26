import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const initialState = {
  loginModal: false,
};


const modalStore = createSlice({
  name: "modal",
  initialState,
  reducers: {
    startSignup(s) {
      s.loginModal = false;
    },
    startLogin(s) {
      s.loginModal = true;
    },
  },
});

export const { startLogin, startSignup } = modalStore.actions;
export const selectLoginModalState = (state: RootState) =>
  state.modal.loginModal;

export default modalStore.reducer;
