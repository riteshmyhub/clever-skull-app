import { createAsyncThunk } from "@reduxjs/toolkit";
import endpoints from "../endpoints/endpoints";
import HttpClient from "./httpClient";

export default class AuthService extends HttpClient {
   constructor() {
      super();
   }

   _login = createAsyncThunk(endpoints.auth.login, async (userObj: { email: string; password: string }, thunkAPI) => {
      try {
         const { data } = await this.post(endpoints.auth.login, userObj);
         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   _register = createAsyncThunk(endpoints.auth.register, async (userObj: { email: string; password: string }, thunkAPI) => {
      try {
         const { data } = await this.post(endpoints.auth.register, userObj);
         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   _logout = createAsyncThunk(endpoints.auth.logout, async (_, thunkAPI) => {
      try {
         const { data } = await this.get(endpoints.auth.register);
         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });
}
