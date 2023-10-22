import AuthService from "@/redux/services/auth.service";
import { useAppDispatch } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useRegisterController() {
   const router = useRouter();
   const { _register } = new AuthService();
   const dispatch = useAppDispatch();

   const callback = ({ data, error }: any) => {
      if (data) {
         router.replace("login");
         toast.success(data?.message);
         router.refresh();
      }
      if (error) {
         toast.error(error.response?.data?.error?.message);
      }
   };

   const submitHandler = (values: any, actions: any) => {
      dispatch(_register({ userObj: values, callback: callback }));
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

   return { submitHandler, validatorHandler };
}
