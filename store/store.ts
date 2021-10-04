import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import uiReducer from "./uiSlice";

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer, auth: authReducer, ui: uiReducer },
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
