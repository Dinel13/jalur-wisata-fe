import { createSlice } from "@reduxjs/toolkit"

export interface UiSlice {
   status : string;
   message : string;
   action : string;
}

const initialState : UiSlice = {
   status : '',
   message : '',
   action : ''
}

export const uiSlice = createSlice({
   name : 'ui',
   initialState,
   reducers : {
      showNotification : (state, action) => {
         state.status = action.payload.status;
         state.message = action.payload.message;
         state.action = action.payload.action;
      },
      hideNotification : (state) => {
         state.status = '';
         state.message = '';
         state.action = '';
      }
   }
})

export const { showNotification, hideNotification } = uiSlice.actions;
export default uiSlice.reducer;

