"use client";
import Link from "next/link";
import useLoginController from "./useLogin.controller";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import TextField from "@/shared/components/text-field";
import NextButton from "@/shared/components/NextButton";

export default function LoginPage() {
   const { submitHandler, validatorHandler } = useLoginController();
   return (
      <Formik initialValues={{ email: "", password: "", confirm_password: "" }} onSubmit={submitHandler} validate={validatorHandler}>
         {(formik: FormikProps<any>) => (
            <div className="bg-theme-level-2 h-full">
               <Form className="md:container md:mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-full justify-center items-center bg-theme-level-2">
                  <div>
                     <img src="/login.svg" alt="login img" className="mx-auto block w-[90%]" />
                  </div>
                  <div>
                     <div className="grid grid-cols-1 gap-1">
                        <div>
                           <span className="text-4xl block mb-3 text-theme-level-5 font-bold">Login to your Account</span>
                        </div>
                        <div>
                           <TextField type="text" name="email" id="email" label="email" placeholder="Email" large formik />
                        </div>
                        <div>
                           <TextField type="text" name="password" id="password" label="password" placeholder="Password" large formik />
                        </div>
                        <div className="grid grid-cols-2 text-theme-level-5 my-2">
                           <div>
                              <label htmlFor="remember" className="cursor-pointer select-none flex items-center">
                                 <input type="checkbox" id="remember" className="h-5 w-5" /> <span className="pl-3">Remember me</span>
                              </label>
                           </div>
                           <div className="text-end">
                              <Link href="forgot-password" className="underline">
                                 forgot password
                              </Link>
                           </div>
                        </div>
                        <div className="my-1">
                           <NextButton role="button" type="submit" color="primary" size="large" disabled={!(formik.dirty && formik.isValid)}>
                              log in
                           </NextButton>
                        </div>
                        <div className="link text-theme-level-5 mt-2">
                           Not registered yet?
                           <span className="underline">
                              <NextButton role="href" navigate={{ path: "register" }}>
                                 Create an Acconunt
                              </NextButton>
                           </span>
                        </div>
                     </div>
                  </div>
               </Form>
            </div>
         )}
      </Formik>
   );
}
