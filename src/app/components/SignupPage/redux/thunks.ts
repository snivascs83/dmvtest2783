import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_UP } from "../../../../../utils/apiUrls";
import axiosApiClient from "../../../../../utils/axiosClientLibs";

export const signupToDashboard = createAsyncThunk(
  "dashboard/signup",
  async (body: any) => {
    try {
      const response = await axiosApiClient.post(SIGN_UP, body);
      return response.data;
    } catch (e: any) {
      return e;
    }
  }
);
