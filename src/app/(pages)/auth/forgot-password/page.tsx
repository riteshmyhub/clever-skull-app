"use client";
import React from "react";
import useForgotPasswordController from "./useForgotPassword.controller";
import { Form, Formik, FormikProps } from "formik";
import DigitalTimer from "@/app/components/DigitalTimer";
import Button from "@/app/components/form/Button";
import Input from "@/app/components/form/Input";

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
                           <Button role="button" type="submit" color="primary" size="large" disabled={Boolean(!otpRequestForm.form.email)}>
                              send otp
                           </Button>
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
                              <Input type="text" name="otp" id="otp" label="otp" placeholder="otp" shape="large" theme required />
                           </div>
                           <div className="grid sm:md:grid-cols-1 md:grid-cols-2 gap-2">
                              <div>
                                 <Input type="password" name="password" id="password" label="password" placeholder="Password" shape="large" theme required />
                              </div>
                              <div className="mb-2">
                                 <Input type="password" name="confirm_password" id="confirm_password" label="confirm password" placeholder="Confirm password" shape="large" theme required />
                              </div>
                           </div>
                           <div className="link text-theme-level-5">
                              OTP will expire in <DigitalTimer sec={20} callback={resendOtp} />
                           </div>
                           <div>
                              <Button role="button" type="submit" color="primary" size="large" disabled={!(formik.dirty && formik.isValid)}>
                                 Reset password
                              </Button>
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
