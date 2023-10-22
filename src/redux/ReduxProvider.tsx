"use client";
import React, { ReactNode, useContext } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./AppProvider";

export default function ReduxProvider({ children, user }: { children: ReactNode; user: any }) {
   return (
      <>
         <Provider store={store}>
            <AppProvider user={user}>{children}</AppProvider>
            <Toaster />
         </Provider>
      </>
   );
}
