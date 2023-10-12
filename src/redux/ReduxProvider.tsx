"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
import AppProvider from "./AppProvider";

export default function ReduxProvider({ children }: { children: ReactNode }) {
   return (
      <Provider store={store}>
         <AppProvider>{children}</AppProvider>
         <Toaster />
      </Provider>
   );
}
