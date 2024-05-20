import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
  error: false,
  isLoading: false,
  token: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUserName: (state) => state.user.name,
    selectToken: (state) => state.token,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const authReducer = slice.reducer;
export const { selectIsLoggedIn, selectToken, selectUserName } =
  slice.selectors;
