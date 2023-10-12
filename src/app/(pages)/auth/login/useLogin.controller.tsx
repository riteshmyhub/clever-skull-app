import AuthService from "@/redux/services/auth.service";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function useLoginController() {
   const router = useRouter();

   const submitHandler = async (values: any, actions: any) => {
      _login(values);
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

   const _login = async (userObj: { email: string; password: string }) => {
      try {
         const { data } = await axios.post("/api/v1/auth/login", userObj);
         console.log(data);
         router.replace("/");
         toast.success(data?.message);
         router.refresh();
      } catch (error: any) {
         toast.error(error.response?.data?.message);
      }
   };

   return { submitHandler, validatorHandler };
}
