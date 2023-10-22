import { Field } from "formik";
import React, { ReactNode } from "react";

type ExtraFeatures = {
   size?: "small" | "large";
   label?: string;
};

type RadioType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & ExtraFeatures;
export function Radio(props: RadioType) {
   return (
      <div>
         <label className="flex items-center capitalize cursor-pointer text-lg" htmlFor={props.id}>
            <Field type="radio" {...props} className="w-6 h-6" />
            &nbsp;&nbsp;{props.label}
         </label>
      </div>
   );
}
export function RadioGroup({ children, label }: { children: ReactNode; label: string }) {
   return (
      <>
         <div className="block text-lg font-medium text-theme-level-5 capitalize mb-2">{label}</div>
         <div className="grid grid-cols-6 gap-1 text-theme-level-5">{children}</div>
      </>
   );
}
