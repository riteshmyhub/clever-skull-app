"use client";
import { ErrorMessage, Field } from "formik";
import React from "react";

type ExtraFeatures = {
   label?: string;
   fullWidth?: boolean;
   extra?: JSX.Element;
   formik?: boolean;
   theme?: boolean;
};
type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & ExtraFeatures;

export default function Textarea(props: Props) {
   const textareaStyle = () => {
      let field = "rounded-md w-full focus:outline-none p-3";
      let label = "block mb-2";
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
   return (
      <div>
         <div className={props.extra && "flex items-center"}>
            <label htmlFor={props?.name} className={textareaStyle().label}>
               {props.label}
            </label>
            <Field as="textarea" className={textareaStyle().field} {...props} />
            <div>{props.extra}</div>
         </div>
         <ErrorMessage name={props?.name as string} component="small" className="text-red-700" />
      </div>
   );
}
