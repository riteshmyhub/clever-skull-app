"use client";
import { ErrorMessage, FastField, Field } from "formik";
import React from "react";

type ExtraFeatures = {
   Size?: "small" | "large";
   label?: string;
   fullWidth?: boolean;
   extra?: JSX.Element;
   formik?: boolean;
   theme?: boolean;
   options: {
      name: string;
      value: string;
   }[];
};
type Props = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & ExtraFeatures;

export default function Select(props: Props) {
   const selectStyle = () => {
      let field = "rounded-md w-full focus:outline-none";
      let label = "block mb-2";
      if (!props.Size) {
         field += " py-3 px-3";
      }
      if (props.Size === "small") {
         field += " py-2 px-2 text-sm";
         label += " text-sm";
      }
      if (props.Size === "large") {
         field += " py-4 px-4 text-lg";
         label += " text-lg";
      }
      if (!props.theme) {
         field += " border-gray-300 focus:outline-none focus:border-blue-300";
         label += " text-gray-700";
      }
      if (props.theme) {
         field += " bg-theme-level-3 text-theme-level-5 placeholder:text-theme-level-4 disabled:bg-theme-level-3";
         label += " text-theme-level-5";
      }
      if (props.required) {
         label += " before:content-['*'] before:text-red-700";
      }
      return { field, label };
   };
   const selectProps = {
      name: props.name,
      id: props.id,
      required: props.required,
      disabled: props.disabled,
   };

   return (
      <div>
         <label htmlFor={props.id} className={selectStyle().label}>
            {props.label}
         </label>
         <Field as="select" {...selectProps} className={selectStyle().field}>
            <option selected>{props.placeholder}</option>
            {props.options.map((item, idx) => (
               <option key={`${props.name}-${item?.value}-${idx}`} value={item?.value}>
                  {item?.name}
               </option>
            ))}
         </Field>
         <ErrorMessage name={props.name as string} component="small" className="text-error" />
      </div>
   );
}
