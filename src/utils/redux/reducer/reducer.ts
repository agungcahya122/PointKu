import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggeIn: false,
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggeIn = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth } = sliceState.actions;

export default reducer;
