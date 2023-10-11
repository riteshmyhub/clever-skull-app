import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useRegisterController() {
   const router = useRouter();
   const submitHandler = (values: any, actions: any) => {
      _register(values);
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
      if (!values.confirm_password) {
         errors.confirm_password = "Confirm password is required";
      }
      return errors;
   };

   const _register = async (userObj: { email: string; password: string; confirm_password: string }) => {
      try {
         const { data } = await axios.post("/api/v1/auth/register", userObj);
         console.log(data);
         router.replace("login");
         toast.success(data?.message);
      } catch (error: any) {
         toast.error(error.response?.data?.message);
      }
   };
   return { submitHandler, validatorHandler };
}
