import axios, { AxiosRequestConfig } from "axios";

export default class HttpClient {
   protected baseurl: string = "localhost:3000/api/v1";
   constructor() {}
   get = (url: string, config?: AxiosRequestConfig<any>) => {
      return axios.get(this.baseurl + url, config);
   };
   post = (url: string, body: any, config?: AxiosRequestConfig<any>) => {
      return axios.post(this.baseurl + url, body, config);
   };
   put = (url: string, body: any, config?: AxiosRequestConfig<any>) => {
      return axios.put(this.baseurl + url, body, config);
   };
   delete = (url: string, body: any, config?: AxiosRequestConfig<any>) => {
      return axios.delete(this.baseurl + url, config);
   };
}
