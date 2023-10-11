"use client";
import NextButton from "@/shared/components/NextButton";
import SelectInput from "@/shared/components/select-input";
import TextField from "@/shared/components/text-field";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import useCategoryBlogsController from "./useCategoryBlogsController";
import { MdDelete } from "react-icons/md";
import blogsCategorySchema from "./blogs-category.schema";

const mockApiList = [
   {
      id: 1,
      category: "Gadgets and Gizmos",
      subcategories: ["Smartphones", "Laptops and PCs", "Smart Home Devices"],
   },
   {
      id: 2,
      category: "Software and Apps",
      subcategories: ["App Development", "Software Reviews", "Operating Systems"],
   },
];
export default function CategoryBlogsPage() {
   const { formValues, submitHandler, setCategory, currentID } = useCategoryBlogsController();
   return (
      <>
         {/* Blogs Category  form */}
         <Formik initialValues={formValues} validationSchema={blogsCategorySchema} onSubmit={submitHandler} enableReinitialize={true}>
            {(formik) => {
               return (
                  <Form>
                     <div className="text-theme-level-5 bg-theme-level-2 p-3 my-3 rounded-md">
                        <FieldArray name="subcategories">
                           {({ push, remove }: any) => (
                              <>
                                 <div className="row items-center">
                                    <div className="col-4">
                                       <div className="text-xl text-theme-level-5 font-bold uppercase"> Category Control</div>
                                    </div>
                                    <div className="col-8 text-end">
                                       <NextButton role="button" type="submit" color="primary" size="large" disabled={!formik.isValid}>
                                          {currentID ? "update" : "+ create"} Category
                                       </NextButton>
                                    </div>
                                 </div>
                                 <div className="border-b my-3 border-theme-level-3"></div>
                                 <div className="p-1">
                                    <TextField type="text" name="category" id="category" label="category" placeholder="Enter blog Category" formik large />
                                 </div>
                                 <div className="row items-center my-3">
                                    <div className="col-6">
                                       <span className="text-lg text-theme-level-5 font-semibold capitalize">subcategory {formik.values?.subcategories?.length}</span>
                                    </div>
                                    <div className="col-6 text-end">
                                       <NextButton type="button" role="button" color="success" size="small" onClick={() => push("test")}>
                                          + subcategory
                                       </NextButton>
                                    </div>
                                    {formik.values?.subcategories?.length ? (
                                       formik.values?.subcategories?.map((subcategory: any, idx: number) => (
                                          <React.Fragment key={"admin-subcategories-" + idx}>
                                             <div className="sm:col-12 md:col-4 p-1">
                                                <TextField
                                                   type="text"
                                                   name={`subcategories[${idx}]`}
                                                   placeholder="Enter blog subcategory"
                                                   extra={
                                                      <button type="button" className="px-3 text-error" onClick={() => remove(idx)}>
                                                         <MdDelete size={22} />
                                                      </button>
                                                   }
                                                   large
                                                   formik
                                                />
                                             </div>
                                          </React.Fragment>
                                       ))
                                    ) : (
                                       <div className="col-12">no</div>
                                    )}
                                 </div>
                              </>
                           )}
                        </FieldArray>
                     </div>
                  </Form>
               );
            }}
         </Formik>
         {/* all categories list */}
         <div className="text-theme-level-5 bg-theme-level-2 p-3 my-3 rounded-md">
            <div className="row items-center">
               <div className="col-12">
                  <div className="text-xl text-theme-level-5 font-bold uppercase">all categories list</div>
               </div>
            </div>
            <div>
               {mockApiList.map((category, idx) => (
                  <React.Fragment key={category.category}>
                     <ul className="my-3">
                        <li className="row items-center">
                           <div className="col-6">
                              <span className="text-lg">
                                 {idx + 1} . {category.category}
                              </span>
                           </div>
                           <div className="col-6 text-end">
                              <NextButton type="button" role="button" size="small" color="success" onClick={() => setCategory(category)}>
                                 update category
                              </NextButton>
                           </div>
                        </li>
                        <li className="p-4">
                           <ul className="row">
                              {category.subcategories.map((subcategory) => (
                                 <li className="col-3">
                                    <div>{subcategory}</div>
                                 </li>
                              ))}
                           </ul>
                        </li>
                     </ul>
                     <div className="border-b my-4 border-theme-level-3"></div>
                  </React.Fragment>
               ))}
            </div>
         </div>
      </>
   );
}
