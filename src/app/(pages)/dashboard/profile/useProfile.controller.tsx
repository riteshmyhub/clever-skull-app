import { useAuth } from "@/redux/AppProvider";
import AuthService from "@/redux/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function useProfileController() {
   const { loading } = useAppSelector((state) => state.authReducer);
   const user = useAuth();
   const { _updateProfile } = new AuthService();
   const dispatch = useAppDispatch();
   const router = useRouter();
   const [formValues, setFormValues] = useState<any>({
      name: "",
      lastname: "",
      gender: "",
      username: "",
   });

   const callback = ({ data, error }: any) => {
      if (data) {
         toast.success(data?.message);
         router.refresh();
      }
      if (error) {
         toast.error(error.response?.data?.error?.message);
      }
   };

   const submitHandler = async (values: any, actions: any) => {
      dispatch(_updateProfile({ profile: values, callback: callback }));
   };

   useEffect(() => {
      if (user?.profile) {
         setFormValues(user?.profile);
      }
      return () => {};
   }, []);

   return { submitHandler, formValues, loading };
}
