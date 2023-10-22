import { useState } from "react";

export default function useCategoryBlogsController() {
   const [currentID, setCurrentID] = useState(null);
   const [formValues, setFormValues] = useState<any>({
      category: "",
      subcategories: [],
   });

   const submitHandler = (value: any, action: any) => {
      console.log(value);
      resetForm(action?.resetForm);
      setCurrentID(null);
   };

   const resetForm = (cb: Function) => {
      setFormValues({
         category: "",
         subcategories: [],
      });
      cb();
   };

   const setCategory = (categoryObj: any) => {
      const { id, category, subcategories } = categoryObj;
      setCurrentID(id);
      setFormValues({ category, subcategories });
   };
   return { formValues, submitHandler, setFormValues, setCategory, currentID };
}
