import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import customizationReducer from "./slices/customization.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
//...
const store = configureStore({
   reducer: {
      authReducer: authReducer,
      customizationReducer: customizationReducer,
   },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
