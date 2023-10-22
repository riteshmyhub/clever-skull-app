import React, { ReactNode } from "react";
import Button from "./form/Button";

type Props = {
   children: ReactNode;
   background?: string;
   theme?: boolean;
   extra?: JSX.Element;
   heading?: string;
};

export default function Card(props: Props) {
   const cardStyle = () => {
      let style = "p-2 rounded-md";
      if (props?.background) {
         style += ` bg-[${props?.background || "gray-200"}]`;
      }
      if (props?.theme) {
         style += ` bg-theme-level-2`;
      }
      return style;
   };
   return (
      <div className={cardStyle()}>
         {props?.heading && (
            <div className="grid grid-cols-2 p-3">
               <div className="text-2xl text-theme-level-5 uppercase">{props?.heading}</div>
               {props?.extra && <div className="text-end">{props?.extra}</div>}
            </div>
         )}
         {props?.children}
      </div>
   );
}
