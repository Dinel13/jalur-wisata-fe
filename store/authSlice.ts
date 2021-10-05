import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface authState {
  token: string;
  name: string;
  email: string;
}

const initialState: authState = {
  token: "",
  name: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, email, name } = action.payload;
      localStorage.setItem("kyups", JSON.stringify(token))
      localStorage.setItem("kyupse", JSON.stringify(email))
      localStorage.setItem("kyupsn", JSON.stringify(name))
      state.token = token;
      state.email = email;
      state.name = name;
    },
    logout: (state) => {
      localStorage.removeItem("kyups");
      localStorage.removeItem("kyupse");
      localStorage.removeItem("kyupsn");
      state.token = null;
      state.email = null;
      state.name = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectName = (state: AppState) => state.auth.name
export const getToken = (state: AppState) => state.auth.token
export default authSlice.reducer;
