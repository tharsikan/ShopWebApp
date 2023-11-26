import { configureStore } from "@reduxjs/toolkit";
import authLoginReducer from "./features/auth/authLoginSlice";
import authPopupReducer from "./features/auth/authPopupSlice";
import notifyReducer from "./features/notify/notifySlice";
import authTypeReducer from './features/auth/authTypeSlice';
import categorySelectReducer from "./features/categories/categorySlice";
import modalStore from "./features/modal.store";

export const store = configureStore({
  reducer: {
    authPopup: authPopupReducer,
    authType: authTypeReducer,
    authLogin: authLoginReducer,
    categorySelect: categorySelectReducer,
    modal: modalStore,
    notify: notifyReducer

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
