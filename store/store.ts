import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import notifReducer from "./notifSlice";

export function makeStore() {
  return configureStore({
    reducer: { auth: authReducer, notif: notifReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
