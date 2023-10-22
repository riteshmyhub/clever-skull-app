"use client";
import { ErrorMessage, Field } from "formik";
import React from "react";

type ExtraFeatures = {
   type: "text" | "password";
   shape?: "small" | "large";
   label?: string;
   fullWidth?: boolean;
   extra?: JSX.Element;
   theme?: boolean;
};
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & ExtraFeatures;

export default function Input(props: Props) {
   const inputStyle = () => {
      let field = "rounded-md w-full focus:outline-none";
      let label = "block mb-2";
      if (!props.shape) {
         field += " py-3 px-3";
      }
      if (props.shape === "small") {
         field += " py-2 px-2 text-sm";
         label += " text-sm";
      }
      if (props.shape === "large") {
         field += " py-4 px-4 text-lg";
         label += " text-lg";
      }
      if (!props?.theme) {
         field += " border-gray-300 focus:outline-none focus:border-blue-300";
         label += " text-gray-700";
      }
      if (props?.theme) {
         field += " bg-theme-level-3 text-theme-level-5 placeholder:text-theme-level-4 disabled:bg-theme-level-3";
         label += " text-theme-level-5";
      }
      if (props.required) {
         label += " before:content-['*'] before:text-red-700";
      }
      return { field, label };
   };

   return (
      <div>
         <div className={props.extra && "flex items-center"}>
            <label htmlFor={props?.name} className={inputStyle().label}>
               {props.label}
            </label>
            <Field className={inputStyle().field} {...props} />
            <div>{props.extra}</div>
         </div>
         <ErrorMessage name={props?.name as string} component="small" className="text-red-700" />
      </div>
   );
}
