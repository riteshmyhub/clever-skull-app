import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

type AuthUser = {
   profile: {
      name: string;
      email: string;
      image: string;
   };
   allowRoles: string[];
};

type AuthStateType = {
   rootLoading: boolean;
   loading: boolean;
   isAuthenticate: boolean;
   user: AuthUser | null;
   error: any;
};

let initialState: AuthStateType = {
   rootLoading: true,
   loading: false,
   isAuthenticate: false,
   user: null,
   error: null,
};
const authSlice = createSlice({
   name: "auth",
   initialState: initialState,
   reducers: {},
   extraReducers(builder) {
      const { _register, _login, _logout } = new AuthService();
      //***********************_register***********************
      builder.addCase(_register.pending, (state) => {
         state.loading = true;
      });

      builder.addCase(_register.fulfilled, (state, action) => {
         console.log(action.payload);
         state.loading = false;
         state.error = null;
      });

      builder.addCase(_register.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload;
      });

      //***********************_login***********************
      builder.addCase(_login.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(_login.fulfilled, (state, action) => {
         localStorage.setItem("token", action.payload.idToken);
         state.loading = false;
         state.isAuthenticate = true;
         state.error = null;
      });
      builder.addCase(_login.rejected, (state, action) => {
         state.loading = false;
         state.isAuthenticate = false;
         state.error = action.payload;
      });

      //***********************logout***********************
      builder.addCase(_logout.pending, (state) => {
         state.rootLoading = true;
      });

      builder.addCase(_logout.fulfilled, (state) => {
         localStorage.clear();
         state.rootLoading = false;
         state.isAuthenticate = false;
         state.user = null;
         state.error = null;
      });

      builder.addCase(_logout.rejected, (state, action) => {
         state.rootLoading = false;
         state.error = action.payload;
      });
   },
});
export default authSlice.reducer;
