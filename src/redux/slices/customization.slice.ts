import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

export type Theme = {
   "--theme-level-1": string;
   "--theme-level-2": string;
   "--theme-level-3": string;
   "--theme-level-4": string;
   "--theme-level-5": string;
};

type Customization = {
   theme: Theme | null;
   font: string;
   loading: boolean;
};
const defaultThemes: Theme = {
   "--theme-level-1": "#FFFFFF",
   "--theme-level-2": "#EEEEEE",
   "--theme-level-3": "#D6D6D6",
   "--theme-level-4": "#A9A9A9",
   "--theme-level-5": "#000000",
};
let initialState: Customization = {
   theme: null,
   font: "",
   loading: true,
};
const customizationSlice = createSlice({
   name: "customization",
   initialState: initialState,
   reducers: {
      getCustomization(state) {
         if (typeof window === "undefined") {
            state.loading = true;
         } else {
            state.theme = JSON.parse(localStorage.getItem("theme") as string) || defaultThemes;
            state.font = JSON.parse(localStorage.getItem("font") as string) || "poppins";
            state.loading = false;
         }
      },
      setTheme(state, action: PayloadAction<Theme>) {
         localStorage.setItem("theme", JSON.stringify(action.payload));
         state.theme = action.payload;
      },
      setFont(state, action: PayloadAction<string>) {
         localStorage.setItem("font", JSON.stringify(action.payload));
         state.font = action.payload;
      },
   },
});
export const { getCustomization, setTheme, setFont } = customizationSlice.actions;
export default customizationSlice.reducer;
