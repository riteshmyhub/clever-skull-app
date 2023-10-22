"use client";
import Input from "@/app/components/form/Input";
import { ErrorMessage, Field, FieldArray, Form, Formik, FormikProps } from "formik";
import React from "react";
import useAdminSingleBlogController from "./useAdminSingleBlog.controller";
import blogSchema from "./blog.schema";
import { MdDelete } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSearchParams } from "next/navigation";
import Button from "@/app/components/form/Button";
import Select from "@/app/components/form/Select";
import Textarea from "@/app/components/form/Textarea";

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
                           <Button role="button" type="submit" color="primary" size="large" disabled={!formik.isValid}>
                              {isCreateMode ? "+ create" : "Update"} blog
                           </Button>
                        )}
                     </div>
                  </div>
                  {/* basic details */}

                  <div className="text-theme-level-5 bg-theme-level-2 p-3 my-3 rounded-md">
                     <div className="text-lg text-theme-level-5 font-semibold capitalize border-b pb-3 mb-3 border-theme-level-3">basic details</div>
                     <div className="row">
                        <div className="col-12 p-1">
                           <Input type="text" name="title" id="title" label="title" placeholder="Enter blog title" disabled={isReadMode} theme required />
                        </div>
                        <div className="sm:col-12 md:col-4 p-1">
                           <Select label="category" name="category" id="category" placeholder="Select category" options={categories} formik disabled={isReadMode} theme required />
                        </div>
                        <div className="sm:col-12 md:col-4 p-1">
                           <Select
                              label="subcategory"
                              name="subcategory"
                              id="subcategory"
                              placeholder="Select subcategory"
                              options={category?.subcategories || []}
                              formik
                              theme
                              required
                              disabled={isReadMode}
                           />
                        </div>
                        <div className="sm:col-12 md:col-4 p-1">
                           <Input type="text" name="author" id="author" label="author" placeholder="author" disabled={isReadMode} theme required />
                        </div>
                        <div className="col-12 p-1">
                           <Textarea name="summary" id="summary" placeholder="Enter blog summary" label="blog summary" rows={5} theme required />
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
                                       <Button role="button" type="button" color="primary" size="small" onClick={() => push("#test")}>
                                          + add hashtag
                                       </Button>
                                    )}
                                 </div>
                              </div>
                              <div className="row">
                                 {formik.values?.meta?.hashtags?.length ? (
                                    formik.values?.meta?.hashtags?.map((hashtag: any, idx: number) => (
                                       <div key={`hashtag-${hashtag}-${idx}`} className="sm:col-12 md:col-3 p-1">
                                          <Input
                                             type="text"
                                             name={`meta.hashtags[${idx}]`}
                                             id={`hashtag-${idx}`}
                                             placeholder="hashtag"
                                             theme
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
                        <Textarea name="meta.description" id="meta_description" placeholder="Enter blog summary" label="meta description" rows={5} theme required />
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
