import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { dashboardReducer } from "./components/LoginPage/redux/slice";
import { signupReducer } from "./components/SignupPage/redux/slice";

import layoutReducer from "../features/layouts/redux/slice";

export function makeStore() {
  return configureStore({
    reducer: {
      layout: layoutReducer,
      dashboard: dashboardReducer,
      signup: signupReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
