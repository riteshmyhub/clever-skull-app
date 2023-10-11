"use client";
import { ErrorMessage, FastField, Field } from "formik";
import React from "react";

type Props = {
   //input props
   name: string;
   id: string;
   placeholder?: string;
   required?: boolean;
   disabled?: boolean;
   //custom props
   label: string;
   large?: boolean;
   formik?: boolean;
   options: {
      name: string;
      value: string;
   }[];
};

export default function SelectInput(props: Props) {
   let selectStyle = {
      className: `bg-theme-level-3 text-theme-level-5 w-full block focus:outline-none disabled:bg-theme-level-3 disabled:cursor-not-allowed ${
         !props.large ? "text-sm p-2.5" : "text-lg  p-3"
      }`,
   };
   const selectProps = {
      name: props.name,
      id: props.id,
      required: props.required,
      disabled: props.disabled,
   };

   return (
      <div>
         <label
            htmlFor={props.id}
            className={
               !props.large //
                  ? "block mb-2 text-sm font-medium text-theme-level-5 capitalize"
                  : "block text-lg font-medium text-theme-level-5 capitalize mb-2"
            }>
            {props.label}
         </label>
         {props.formik ? (
            <>
               <Field as="select" {...selectProps} {...selectStyle}>
                  <option selected>{props.placeholder}</option>
                  {props.options.map((item, idx) => (
                     <option key={`${props.name}-${item?.value}-${idx}`} value={item?.value}>
                        {item?.name}
                     </option>
                  ))}
               </Field>
               <ErrorMessage name={props.name} component="small" className="text-error" />
            </>
         ) : (
            <select {...selectProps} {...selectStyle}>
               <option selected>{props.placeholder}</option>
               {props.options.map((item, idx) => (
                  <option key={`${props.name}-${item?.value}-${idx}`} value={item?.value}>
                     {item?.name}
                  </option>
               ))}
            </select>
         )}
      </div>
   );
}
