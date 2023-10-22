import { createAsyncThunk } from "@reduxjs/toolkit";
import endpoints from "../endpoints/endpoints";
import HttpClient from "./httpClient";
import { toast } from "react-hot-toast";
type Login = {
   userObj: { email: string; password: string };
   callback: Function;
};

type Register = {
   userObj: { email: string; password: string };
   callback: Function;
};

type UpdateProfile = {
   profile: any;
   callback: Function;
};

type Logout = {
   callback: Function;
};
export default class AuthService extends HttpClient {
   constructor() {
      super();
   }

   _login = createAsyncThunk(endpoints.auth.login, async ({ userObj, callback }: Login, thunkAPI) => {
      try {
         const { data } = await this.post(endpoints.auth.login, userObj);
         callback({ data });
         return data;
      } catch (error: any) {
         callback({ error });
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   _register = createAsyncThunk(endpoints.auth.register, async ({ userObj, callback }: Register, thunkAPI) => {
      try {
         const { data } = await this.post(endpoints.auth.register, userObj);
         callback({ data });
         return data;
      } catch (error: any) {
         callback({ error });
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   _useOnLoad = createAsyncThunk(endpoints.user.getProfile, async (_, thunkAPI) => {
      try {
         const { data } = await this.get(endpoints.user.getProfile);
         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   _updateProfile = createAsyncThunk(endpoints.user.createProfile, async ({ profile, callback }: UpdateProfile, thunkAPI) => {
      try {
         const { data } = await this.post(endpoints.user.createProfile, profile);
         callback({ data });
         return data;
      } catch (error: any) {
         callback({ error });
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   _logout = createAsyncThunk(endpoints.auth.logout, async ({ callback }: Logout, thunkAPI) => {
      try {
         const { data } = await this.get(endpoints.auth.logout);
         callback({ data });
         return data;
      } catch (error: any) {
         callback({ error });
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });
}
