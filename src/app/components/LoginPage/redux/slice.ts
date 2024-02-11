import { createSlice } from "@reduxjs/toolkit";
import { loginToDashboard } from "./thunks";

export const dashboardSlice = createSlice({
  name: "dashboard",
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
    builder.addCase(loginToDashboard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginToDashboard.fulfilled, (state, action) => {
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
    builder.addCase(loginToDashboard.rejected, (state: any, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.allow = false;
    });
  },
});

export const { setLogintoken } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
