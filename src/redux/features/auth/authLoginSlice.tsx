import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';



// USE THIS REDUCER TO CONTROL THE BETWEEN GUEST USER AND MEMBER
// THIS WILL CHANGE USER LEFT SIDEBAR ONCE THEY LOG IN AND HOMEPAGE WILL SHOW USER BANNER LIKE FIGMA (1-2. HOMEPAGE )
// THERE WILL BE ONLY 2 TYPES OF TOP/LEFT SIDE BAR BOTH FIXED TO SCREEN UNTIL MOBILE DEVICES, PLEASE FIGMA FILE FOR CLEAR VISUAL.
// THIS WILL A BE DUMMY REDUCER, UNTIL API INTEGRATION. SIMPLYCLICK ON "LOGIN" BUTTON (YOU DONT NEED TO FILL ANYTHING OUT) TO CALL ACTION TO EFFECT THE REDUCER.

// Define a type for the slice state
interface AuthLoginState {
  value: boolean;
}

// Define the initial state using that type
const initialState: AuthLoginState = {
  value: false,
};



export const authLoginSlice = createSlice({
  name: 'authLogin',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    authLogin: (state) => {
      state.value = true;
     
    },
    authLogout: (state) => {
      state.value = false;
    },
  },
});

export const { authLogin, authLogout } = authLoginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLogin = (state: RootState) => state.authLogin.value;

export default authLoginSlice.reducer;
