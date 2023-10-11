"use client";
import { Field, ErrorMessage, Formik, FormikProps, Form } from "formik";
import useRegisterController from "./useRegister.controller";
import TextField from "@/shared/components/text-field";
import NextButton from "@/shared/components/NextButton";

export default function RegisterPage() {
   const { submitHandler, validatorHandler } = useRegisterController();
   return (
      <div className="bg-theme-level-2 h-full">
         <Formik initialValues={{ email: "", password: "", confirm_password: "" }} onSubmit={submitHandler} validate={validatorHandler}>
            {(formik: FormikProps<any>) => (
               <Form className="md:container md:mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-full justify-center items-center bg-theme-level-2">
                  <div>
                     <img src="/register.svg" alt="login img" className="mx-auto block w-[90%]" />
                  </div>
                  <div>
                     <div className="grid grid-cols-1 gap-2">
                        <div>
                           <span className="text-4xl block mb-3 text-theme-level-5 font-bold">Create your Account</span>
                        </div>
                        <div>
                           <TextField type="text" name="email" id="email" label="email" placeholder="Email" large formik />
                        </div>
                        <div className="grid sm:md:grid-cols-1 md:grid-cols-2 gap-2">
                           <div>
                              <TextField type="password" name="password" id="password" label="password" placeholder="Password" large formik />
                           </div>
                           <div className="mb-2">
                              <TextField type="password" name="confirm_password" id="confirm_password" label="confirm password" placeholder="Confirm password" large formik />
                           </div>
                        </div>
                        <div className="my-1">
                           <NextButton role="button" type="submit" color="primary" size="large" disabled={!(formik.dirty && formik.isValid)}>
                              Create Account
                           </NextButton>
                        </div>
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
}
