import { Field } from "formik";
import React, { ReactNode } from "react";

type ExtraFeatures = {
   size?: "small" | "large";
   label?: string;
};

type RadioBoxType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & ExtraFeatures;
export function RadioBox(props: RadioBoxType) {
   return (
      <div>
         <label className="flex items-center capitalize" htmlFor={props.id}>
            <Field type="radio" {...props} className="w-5 h-5" />
            &nbsp;&nbsp;{props.label}
         </label>
      </div>
   );
}
export function RadioBoxGroup({ children, label }: { children: ReactNode; label: string }) {
   return (
      <>
         <div className="block text-lg font-medium text-theme-level-5 capitalize mb-2">{label}</div>
         <div className="grid grid-cols-4 gap-1">{children}</div>
      </>
   );
}
