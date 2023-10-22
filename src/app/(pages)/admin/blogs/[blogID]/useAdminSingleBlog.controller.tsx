import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function useAdminSingleBlogController(param: { blogID: string }) {
   const router = useRouter();
   const [formValues, setFormValues] = useState<any>({
      title: "",
      category: "",
      subcategory: "",
      author: "",
      summary: "",
      content: "",
      meta: {
         hashtags: [],
         description: "",
      },
   });

   const submitHandler = (value: any, action: any) => {
      console.log(value);
      resetForm(action?.resetForm);
      router.replace("../blogs");
   };

   const resetForm = (cb: Function) => {
      setFormValues({
         title: "",
         category: "",
         subcategory: "",
         author: "",
         summary: "",
         content: "",
         meta: {
            hashtags: [],
            description: "",
         },
      });
      cb();
   };

   useEffect(() => {
      if (param.blogID !== "add") {
         //api call here
         setFormValues({
            title: "Tracy Lee: The superpower of becoming an Expert of becoming an Expert",
            category: "gadgets",
            subcategory: "smartphones",
            author: "ritesh",
            summary: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam tempora assumenda quam asperiores voluptate aut pariatur voluptatem nesciunt omnis atque voluptatum fugit cum vitae, odio, dolor rem esse nisi totam`,
            content: `<h1>this is content</h1>`,
            meta: {
               hashtags: ["google", "angular", "ng", "ngindia"],
               description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, cupiditate culpa? In quo harum fugiat`,
            },
         });
      }

      return () => {};
   }, [param.blogID]);

   return { submitHandler, formValues };
}
