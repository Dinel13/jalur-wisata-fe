import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface uiState {
  nottification: {
    message: string;
    status: string;
    action: () => void;
  };
}

const initialState: uiState = {
  nottification: {
    message: "",
    status: "",
    action: null,
  },
};

export const notifSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.nottification.status = action.payload.status;
      state.nottification.message = action.payload.message;
      state.nottification.action = action.payload.action;
    },
    hideNotification: (state) => {
      state.nottification.status = "";
      state.nottification.message = "";
      state.nottification.action = null;
    },
  },
});

export const { showNotification, hideNotification } = notifSlice.actions;
export const notifData = (state: AppState) => state.notif.nottification
export default notifSlice.reducer;
