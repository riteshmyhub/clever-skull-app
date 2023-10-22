"use client";
import React from "react";
import useProfileController from "./useProfile.controller";
import { Form, Formik, FormikProps } from "formik";
import Input from "@/app/components/form/Input";
import Button from "@/app/components/form/Button";
import { Radio, RadioGroup } from "@/app/components/form/Radio";
import Card from "@/app/components/Card";
import Router from "next/navigation";
export default function ProfilePage() {
   const { submitHandler, formValues, loading } = useProfileController();

   return (
      <Card heading="Update profile" theme>
         <Formik initialValues={formValues} onSubmit={submitHandler} enableReinitialize={true}>
            {(formik: FormikProps<any>) => {
               return (
                  <Form>
                     <div className="row">
                        <div className="col-6 p-2">
                           <Input type="text" label="name" name="name" placeholder="Name" id="name" theme required />
                        </div>
                        <div className="col-6 p-2">
                           <Input type="text" label="lastname" name="lastname" placeholder="lastname" id="lastname" theme required />
                        </div>
                        <div className="col-12 p-2">
                           <Input type="text" label="username" name="username" placeholder="username" id="username" theme required />
                        </div>
                        <div className="col-12 p-2">
                           <RadioGroup label="*gender">
                              <Radio label="male" name="gender" value="male" />
                              <Radio label="female" name="gender" value="female" />
                           </RadioGroup>
                        </div>
                        <div className="col-12 p-2">
                           <Button type="submit" role="button" size="large" color="primary" disabled={!(formik.dirty && formik.isValid) || loading} loading={loading}>
                              Create Profile
                           </Button>
                        </div>
                     </div>
                  </Form>
               );
            }}
         </Formik>
      </Card>
   );
}
