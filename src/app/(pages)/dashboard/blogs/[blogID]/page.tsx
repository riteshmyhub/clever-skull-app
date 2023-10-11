"use client";
import SelectInput from "@/shared/components/select-input";
import TextField from "@/shared/components/text-field";
import { ErrorMessage, Field, FieldArray, Form, Formik, FormikProps } from "formik";
import React from "react";
import useAdminSingleBlogController from "./useAdminSingleBlog.controller";
import blogSchema from "./blog.schema";
import { MdDelete } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NextButton from "@/shared/components/NextButton";
import { useSearchParams } from "next/navigation";
import { RadioBoxGroup, RadioBox } from "@/shared/components/RadioBox";

const categories = [
   {
      name: "Gadgets and Gizmos",
      value: "gadgets",
      subcategories: [
         { name: "Smartphones", value: "smartphones" },
         { name: "Laptops and PCs", value: "laptops-pcs" },
         { name: "Smart Home Devices", value: "smart-home" },
      ],
   },
   {
      name: "Software and Apps",
      value: "software",
      subcategories: [
         { name: "App Development", value: "app-development" },
         { name: "Software Reviews", value: "software-reviews" },
         { name: "Operating Systems", value: "os" },
      ],
   },
];
const editorConfig = {
   toolbar: [[{ header: "1" }, { header: "2" }, { font: [] }], [{ list: "ordered" }, { list: "bullet" }], ["bold", "italic", "underline"], ["link"], [{ align: [] }], ["clean"]],
};
export default function AdminSingleBlogPage({ params }: { params: { blogID: string } }) {
   const { formValues, submitHandler } = useAdminSingleBlogController(params);
   const mode = useSearchParams().get("mode");
   let isReadMode = mode === "view";
   let isUpdateMode = mode === "edit";
   let isCreateMode = params.blogID === "add";
   return (
      <Formik initialValues={formValues} validationSchema={blogSchema} onSubmit={submitHandler} enableReinitialize={true}>
         {(formik) => {
            const category: any = formik.values?.category && categories?.find((cat) => cat?.value === formik.values?.category);
            return (
               <Form>
                  <div className="row items-center bg-theme-level-2 p-3 rounded-md">
                     <div className="col-8">
                        <div className="text-xl text-theme-level-5 font-bold uppercase">{mode} blog</div>
                     </div>
                     <div className="col-4 text-end">
                        {!isReadMode && (
                           <NextButton role="button" type="submit" color="primary" size="large" disabled={!formik.isValid}>
                              {isCreateMode ? "+ create" : "Update"} blog
                           </NextButton>
                        )}
                     </div>
                  </div>
                  {/* basic details */}

                  <div className="text-theme-level-5 bg-theme-level-2 p-3 my-3 rounded-md">
                     <div className="text-lg text-theme-level-5 font-semibold capitalize border-b pb-3 mb-3 border-theme-level-3">basic details</div>
                     <div className="row">
                        <div className="col-12 p-1">
                           <TextField type="text" name="title" id="title" label="title" placeholder="Enter blog title" large formik disabled={isReadMode} />
                        </div>
                        <div className="sm:col-12 md:col-4 p-1">
                           <SelectInput label="category" name="category" id="category" placeholder="Select category" options={categories} large formik disabled={isReadMode} />
                        </div>
                        <div className="sm:col-12 md:col-4 p-1">
                           <SelectInput
                              label="subcategory"
                              name="subcategory"
                              id="subcategory"
                              placeholder="Select subcategory"
                              options={category?.subcategories || []}
                              large
                              formik
                              disabled={isReadMode}
                           />
                        </div>
                        <div className="sm:col-12 md:col-4 p-1">
                           <TextField type="text" name="author" id="author" label="author" placeholder="author" large formik disabled={isReadMode} />
                        </div>
                        <div className="col-12 p-1">
                           <label htmlFor="summary" className="block text-lg font-medium text-theme-level-5 capitalize mb-2">
                              summary
                           </label>
                           <Field
                              as="textarea"
                              name="summary"
                              id="summary"
                              placeholder="Enter blog summary"
                              className="bg-theme-level-3 text-theme-level-5 w-full h-40 block focus:outline-none placeholder:text-theme-level-4 disabled:bg-theme-level-3 disabled:cursor-not-allowed text-lg  p-3 placeholder:text-lg"
                              disabled={isReadMode}
                           />
                           <ErrorMessage name="summary" component="small" className="text-error" />
                        </div>
                     </div>
                  </div>
                  {/* basic details */}
                  {/* meta section */}
                  <div className="text-theme-level-5 bg-theme-level-2 p-3 my-3 rounded-md">
                     <FieldArray name="meta.hashtags">
                        {({ push, remove }: any) => (
                           <>
                              <div className="row items-center  border-b pb-3 mb-3 border-theme-level-3">
                                 <div className="col-6">
                                    <div className="text-lg text-theme-level-5 font-semibold capitalize">meta section</div>
                                 </div>
                                 <div className="col-6 text-end">
                                    {!isReadMode && (
                                       <NextButton role="button" type="button" color="primary" size="small" onClick={() => push("#test")}>
                                          + add hashtag
                                       </NextButton>
                                    )}
                                 </div>
                              </div>
                              <div className="row">
                                 {formik.values?.meta?.hashtags?.length ? (
                                    formik.values?.meta?.hashtags?.map((hashtag: any, idx: number) => (
                                       <div key={`hashtag-${hashtag}-${idx}`} className="sm:col-12 md:col-3 p-1">
                                          <TextField
                                             type="text"
                                             name={`meta.hashtags[${idx}]`}
                                             id={`hashtag-${idx}`}
                                             label={`hashtag ${idx + 1}`}
                                             placeholder="hashtag"
                                             large
                                             formik
                                             extra={
                                                !isReadMode ? (
                                                   <button type="button" className="px-3 text-error" onClick={() => remove(idx)}>
                                                      <MdDelete size={22} />
                                                   </button>
                                                ) : (
                                                   <span></span>
                                                )
                                             }
                                             disabled={isReadMode}
                                          />
                                       </div>
                                    ))
                                 ) : (
                                    <div className="col-12 bg-theme-level-3 border-l-4 border-blue-500 text-blue-300 p-4 rounded-lg my-3">
                                       <div className="flex items-center">
                                          <div>
                                             <p className="font-semibold">Warning</p>
                                             <p>please add any hashtags</p>
                                          </div>
                                       </div>
                                    </div>
                                 )}
                              </div>
                           </>
                        )}
                     </FieldArray>
                     <div>
                        <label htmlFor="meta_description" className="block text-lg font-medium text-theme-level-5 capitalize mb-2">
                           meta description
                        </label>
                        <Field
                           as="textarea"
                           name="meta.description"
                           id="meta_description"
                           placeholder="Enter meta description"
                           className="bg-theme-level-3 text-theme-level-5 w-full h-40 block focus:outline-none placeholder:text-theme-level-4 disabled:bg-theme-level-3 disabled:cursor-not-allowed text-lg  p-3 placeholder:text-lg"
                           disabled={isReadMode}
                        />
                        <ErrorMessage name="meta.description" component="small" className="text-error" />
                     </div>
                  </div>
                  {/* meta section */}

                  {/* content */}
                  <div className="text-theme-level-5 bg-theme-level-2 p-3 my-3 rounded-md">
                     <div className="text-lg text-theme-level-5 font-semibold capitalize border-b pb-3 mb-3 border-theme-level-3">content</div>
                     <Field name="content">
                        {({ field }: any) => (
                           <>
                              <ReactQuill modules={editorConfig} value={field?.value} onChange={field?.onChange(field.name)} readOnly={isReadMode} />
                           </>
                        )}
                     </Field>
                     <ErrorMessage name="content" component="small" className="text-error" />
                  </div>
                  {/*  */}
               </Form>
            );
         }}
      </Formik>
   );
}
