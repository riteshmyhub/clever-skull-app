import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function useForgotPasswordController() {
   const [isOtpSend, setIsOtpSend] = useState(false);
   const router = useRouter();
   const [otpRequestForm, setotpRequestForm] = useState({
      email: "",
   });

   const requestOtpFormHandler = (e: any) => {
      e.preventDefault();
      if (otpRequestForm.email) {
         setIsOtpSend(true);
         toast.success("otp has sent your email id");
      }
   };

   const requestOtpFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setotpRequestForm({
         ...otpRequestForm,
         [name]: value,
      });
   };

   const resendOtp = () => {
      setIsOtpSend(false);
   };

   // Reset Password Form
   const resetPasswordFormSubmit = (values: any, actions: any) => {
      console.log(values);
      router.replace("login");
      toast.success("password successfully reset");
   };

   const resetPasswordFormValidator = (values: any) => {
      let errors: any = {};
      if (!values.otp) {
         errors.otp = "otp is required";
      }
      if (!values.password) {
         errors.password = "Password is required";
      }
      if (!values.confirm_password) {
         errors.confirm_password = "Confirm password is required";
      }
      return errors;
   };

   return {
      otpRequestForm: {
         form: otpRequestForm,
         submit: requestOtpFormHandler,
         change: requestOtpFormChange,
      },
      isOtpSend,
      resendOtp, //
      resetPasswordFormSubmit,
      resetPasswordFormValidator,
   };
}
