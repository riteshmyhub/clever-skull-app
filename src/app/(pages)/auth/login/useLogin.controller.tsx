import AuthService from "@/redux/services/auth.service";
import { appRefresh } from "@/redux/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function useLoginController() {
   const router = useRouter();
   const { _login } = new AuthService();
   const dispatch = useAppDispatch();
   const { loading } = useAppSelector((state) => state.authReducer);
   const callback = ({ data, error }: any) => {
      if (data) {
         router.replace("/dashboard/profile");
         toast.success(data?.message);
         router.refresh();
         dispatch(appRefresh());
      }
      if (error) {
         toast.error(error.response?.data?.error?.message);
      }
   };

   const submitHandler = async (values: any, actions: any) => {
      dispatch(_login({ userObj: values, callback: callback }));
      actions?.resetForm();
   };

   const validatorHandler = (values: any) => {
      let errors: any = {};
      if (!values.email) {
         errors.email = "Email is required";
      }
      if (!values.password) {
         errors.password = "Password is required";
      }
      return errors;
   };

   useEffect(() => {
     
      return () => {};
   }, []);

   return { submitHandler, validatorHandler, loading };
}
