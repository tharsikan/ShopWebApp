import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface AuthPopupState {
  value: boolean;
}

// Define the initial state using that type
const initialState: AuthPopupState = {
  value: false,
};

export const authPopupSlice = createSlice({
  name: "authPopup",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    authShow: (state) => {
      state.value = true;
    },
    authClose: (state) => {
      state.value = false;
    },
  },
});

export const { authShow, authClose } = authPopupSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.authPopup.value;

export default authPopupSlice.reducer;
