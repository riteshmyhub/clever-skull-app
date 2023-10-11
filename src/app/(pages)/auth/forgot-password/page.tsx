"use client";
import React from "react";
import useForgotPasswordController from "./useForgotPassword.controller";
import { Form, Formik, FormikProps } from "formik";
import TextField from "@/shared/components/text-field";
import NextButton from "@/shared/components/NextButton";
import DigitalTimer from "@/shared/components/DigitalTimer";

export default function ForgotPasswordPage() {
   const { otpRequestForm, resetPasswordFormSubmit, resetPasswordFormValidator, isOtpSend, resendOtp } = useForgotPasswordController();

   return (
      <div className="bg-theme-level-2 h-full">
         <div className="md:container md:mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-full justify-center items-center">
            {!isOtpSend ? (
               <>
                  <div>
                     <img //
                        src="/forgot-password.svg"
                        alt="forgot-password-img"
                        className="mx-auto block w-[90%]"
                     />
                  </div>
                  <form onSubmit={otpRequestForm.submit}>
                     <div className="grid grid-cols-1 gap-1">
                        <div>
                           <span className="text-4xl block mb-3 text-theme-level-5 font-bold">Forgot password</span>
                        </div>
                        <div className="mb-3">
                           <label htmlFor="email" className="input-text-label-lg mb-2">
                              Email
                           </label>
                           <input //
                              name="email"
                              type="text"
                              id="email"
                              className="input-text-lg"
                              placeholder="Email"
                              autoComplete="off"
                              value={otpRequestForm.form.email}
                              onChange={otpRequestForm.change}
                           />
                        </div>
                        <div className="my-1">
                           <NextButton role="button" type="submit" color="primary" size="large" disabled={Boolean(!otpRequestForm.form.email)}>
                              send otp
                           </NextButton>
                        </div>
                     </div>
                  </form>
               </>
            ) : (
               <>
                  <div>
                     <img //
                        src="/reset-password.svg"
                        alt="reset-password-img"
                        className="mx-auto block w-[90%]"
                     />
                  </div>
                  <Formik initialValues={{ otp: "", password: "", confirm_password: "" }} onSubmit={resetPasswordFormSubmit} validate={resetPasswordFormValidator}>
                     {(formik: FormikProps<any>) => (
                        <Form className="grid grid-cols-1 gap-2">
                           <div>
                              <span className="text-4xl block mb-3 text-theme-level-5 font-bold">Reset password</span>
                           </div>
                           <div>
                              <TextField type="text" name="otp" id="otp" label="otp" placeholder="otp" large formik />
                           </div>
                           <div className="grid sm:md:grid-cols-1 md:grid-cols-2 gap-2">
                              <div>
                                 <TextField type="password" name="password" id="password" label="password" placeholder="Password" large formik />
                              </div>
                              <div className="mb-2">
                                 <TextField type="password" name="confirm_password" id="confirm_password" label="confirm password" placeholder="Confirm password" large formik />
                              </div>
                           </div>
                           <div className="link text-theme-level-5">
                              OTP will expire in <DigitalTimer sec={20} callback={resendOtp} />
                           </div>
                           <div>
                              <NextButton role="button" type="submit" color="primary" size="large" disabled={!(formik.dirty && formik.isValid)}>
                                 Reset password
                              </NextButton>
                           </div>
                        </Form>
                     )}
                  </Formik>
               </>
            )}
         </div>
      </div>
   );
}
