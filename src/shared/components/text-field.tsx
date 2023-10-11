"use client";
import { ErrorMessage, Field } from "formik";
import React from "react";

type Props = {
   //input props
   type: string | "text" | "password";
   name: string;
   id?: string;
   placeholder?: string;
   required?: boolean;
   disabled?: boolean;
   //custom props
   label?: string;
   large?: boolean;
   formik?: boolean;
   extra?: JSX.Element;
};

export default function TextField(props: Props) {
   const inputProps = {
      type: props.type,
      name: props.name,
      id: props.id,
      placeholder: props.placeholder,
      required: props.required,
      disabled: props.disabled,
   };

   let inputStyle = {
      className: `bg-theme-level-3 text-theme-level-5 w-full block focus:outline-none placeholder:text-theme-level-4 disabled:bg-theme-level-3 disabled:cursor-not-allowed ${
         !props.large ? "text-sm p-2.5" : "text-lg  p-3 placeholder:text-lg"
      }`,
   };
   return (
      <>
         <div>
            <label
               htmlFor={props?.id}
               className={
                  !props.large //
                     ? "block mb-2 text-sm font-medium text-theme-level-5 capitalize"
                     : "block text-lg font-medium text-theme-level-5 capitalize mb-2"
               }>
               {props?.label}
            </label>
            <>
               {props.formik ? (
                  <>
                     <div className={props.extra && "flex items-center bg-theme-level-3"}>
                        <Field {...inputProps} {...inputStyle} />
                        <div className="bg-theme-level-3">{props.extra}</div>
                     </div>
                     <ErrorMessage name={props.name} component="small" className="text-error" />
                  </>
               ) : (
                  <div className={props.extra && "flex items-center bg-theme-level-3"}>
                     <input {...inputProps} {...inputStyle} />
                     <div className="bg-theme-level-3">{props.extra}</div>
                  </div>
               )}
            </>
         </div>
      </>
   );
}
