import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../../app/store";
interface IRouteRedirect {
  history: string[];
  current: string;
  status: boolean;
}
interface IRoutePayloadArg {
  current: string;
  status: boolean;
}
export interface ILayoutSlice {
  loader: boolean;
  isRedirecting: IRouteRedirect;
}
const initialState: ILayoutSlice = {
  loader: false,
  isRedirecting: {
    history: [],
    current: "",
    status: false,
  },
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    setIsRedirecting: (state, action: PayloadAction<IRoutePayloadArg>) => {
      state.isRedirecting.status = action.payload.status;
      state.isRedirecting.current = action.payload.current;
      if (
        state.isRedirecting.history.length === 0 ||
        state.isRedirecting.history.lastIndexOf(action.payload.current) !==
          state.isRedirecting.history.length - 1
      ) {
        state.isRedirecting.history.push(action.payload.current);
      }
    },
  },
});

// actions
export const layoutSliceName = layoutSlice.name;

// actions
export const layoutSliceActions = layoutSlice.actions;

// reducers
export const layoutSliceState = (state: AppState) => {
  return state.layout;
};

// default export
export default layoutSlice.reducer;
