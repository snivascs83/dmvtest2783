import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOG_IN } from "../../../../../utils/apiUrls";
import axiosApiClient from "../../../../../utils/axiosClientLibs";

export const loginToDashboard = createAsyncThunk(
  "dashboard/login",
  async (body: any) => {
    try {
      const response = await axiosApiClient.post(LOG_IN, body);
      return response.data;
    } catch (e: any) {
      throw new Error(e.data.message);
    }
  }
);
