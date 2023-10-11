"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { createPortal } from "react-dom";

type Dialog = {
   title: string;
   callback: Function;
   type: "success" | "danger" | "warning";
};
type Navigate = {
   path: string;
   replace?: boolean;
   target?: "_blank" | "_self" | "_parent" | "_top";
};
type ExtraFeatures = {
   size?: "small" | "large";
   navigate?: Navigate;
   color?: "theme" | "warning" | "primary" | "secondary" | "success" | "danger" | "dark" | "info";
   fullWidth?: boolean;
   role: "button" | "href";
   dialog?: Dialog;
};
type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ExtraFeatures;

export default function NextButton(props: ButtonProps) {
   const [isOpen, setDialog] = React.useState(false);
   const router = useRouter();
   const navigation = () => {
      const { navigate } = props;
      if (navigate?.path) {
         router.push(navigate?.path);
      }
      if (navigate?.replace) {
         router.replace(navigate?.path);
      }
   };
   const dialogHandler = () => {
      props.dialog?.callback();
      setDialog(false);
   };
   const className = () => {
      let btnClass: string = "rounded-sm disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed uppercase";
      if (props.size === "small") {
         btnClass += " py-1 px-3 text-sm";
      }
      if (props.size === "large") {
         btnClass += " py-2 px-3 text-lg";
      }
      if (props.color === "theme") {
         btnClass += " text-theme-level-5 bg-theme-level-3";
      }
      if (props.color === "warning") {
         btnClass += " text-black bg-yellow-500";
      }
      if (props.color === "primary") {
         btnClass += " text-white bg-blue-600";
      }
      if (props.color === "secondary") {
         btnClass += " text-white bg-gray-600";
      }
      if (props.color === "success") {
         btnClass += " text-white bg-green-600";
      }
      if (props.color === "danger") {
         btnClass += " text-white bg-red-600";
      }
      if (props.color === "dark") {
         btnClass += " text-white bg-gray-700";
      }
      if (props.color === "info") {
         btnClass += " text-white bg-blue-400";
      }
      if (props.fullWidth) {
         btnClass += " w-full";
      }
      return btnClass;
   };
   if (!props.role) {
      return "no button";
   }
   if (props.role === "button") {
      let buttonProps = { ...props };
      delete buttonProps.fullWidth;
      delete buttonProps.color;
      return (
         <>
            <button //
               {...buttonProps}
               className={className()}
               {...(props.navigate ? { onClick: () => navigation() } : {})}
               {...(props.dialog ? { onClick: () => setDialog(true) } : {})}>
               {props.children}
            </button>
            {/* modal portal */}
            {props.dialog &&
               isOpen &&
               createPortal(
                  <>
                     <DialogBox title={props.dialog.title} description="" ok={() => dialogHandler()} onClose={() => setDialog(false)} />
                  </>,
                  document.body
               )}
            {/* modal portal */}
         </>
      );
   }
   if (props.role === "href") {
      return (
         <Link href={`${props.navigate?.path}`} replace={props.navigate?.replace} target={props.navigate?.target}>
            {props.children}
         </Link>
      );
   }
}
type Props = {
   title: string;
   description: string;
   ok: () => void;
   onClose: () => void;
};

function DialogBox(props: Props) {
   return (
      <>
         <div className="bg-overlay h-[100vh] flex items-end justify-center p-3 fixed top-0 left-0 w-full overflow-y-hidden">
            <div className="relative w-full max-w-xl max-h-full">
               {/*  */}
               <div className="relative bg-theme-level-2 rounded-lg shadow">
                  <div className="p-6 text-center">
                     <svg className="mx-auto mb-4 text-theme-level-5 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                     </svg>
                     <h3 className="mb-5 text-lg font-normal text-theme-level-5">{props.title}</h3>
                     <div className="grid grid-cols-2 gap-2">
                        <NextButton role="button" type="button" color="danger" size="large" onClick={props.ok} fullWidth>
                           Yes
                        </NextButton>
                        <NextButton role="button" type="button" color="primary" size="large" onClick={props.onClose} fullWidth>
                           Cancel
                        </NextButton>
                     </div>
                  </div>
               </div>
               {/*  */}
            </div>
         </div>
      </>
   );
}
