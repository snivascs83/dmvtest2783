import { createSlice } from "@reduxjs/toolkit";
import { signupToDashboard } from "./thunks";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    isLoading: false,
    isDataLoaded: false,
    error: "",
    logintoken: "",
    allow: false,
  },
  reducers: {
    setLogintoken(state, action) {
      state.logintoken = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signupToDashboard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signupToDashboard.fulfilled, (state, action) => {
      const token = action.payload.jwt ?? "";
      const isTokenValid = token && typeof token === "string";
      state.isLoading = false;
      if (isTokenValid) {
        state.logintoken = token;
        sessionStorage.setItem(
          "ff_session_token",
          JSON.stringify(action.payload)
        );
      } else {
        state.logintoken = "";
      }
    });
    builder.addCase(signupToDashboard.rejected, (state: any, action) => {
      console.log({ action: action.payload });
      state.error = action.error.message;
      state.isLoading = false;
      state.allow = false;
    });
  },
});

export const { setLogintoken } = signupSlice.actions;
export const signupReducer = signupSlice.reducer;
