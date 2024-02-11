import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
