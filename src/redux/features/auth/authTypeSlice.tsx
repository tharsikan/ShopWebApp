import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface AuthTypeState {
  value: string;
  screen: Boolean;
}

// Define the initial state using that type
const initialState: AuthTypeState = {
  value: "signin",
  screen: false
};

export const authTypeSlice = createSlice({
  name: "authType",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signin: (state) => {
      state.value = "signin";
    },
    signup: (state) => {
      state.value = "signup";
    },
    handleNext: (state) => {
      state.screen = true;
    },
    handlePrev: (state) => {
      state.screen = false;
    },
  },
});

export const { signin, signup, handleNext, handlePrev } = authTypeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectType = (state: RootState) => state.authType.value;

export default authTypeSlice.reducer;
