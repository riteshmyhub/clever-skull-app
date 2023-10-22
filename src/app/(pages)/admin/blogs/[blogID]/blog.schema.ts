import * as yup from "yup";

const blogSchema = yup.object().shape({
   title: yup.string().required("Title is required"),
   category: yup.string().required("Category is required"),
   subcategory: yup.string().required("Subcategory is required"),
   author: yup.string().required("Author is required"),
   summary: yup.string().required("Summary is required"),
   content: yup.string().required("Content is required"),
   meta: yup.object().shape({
      hashtags: yup.array().of(yup.string().required("Hashtags are required")),
      description: yup.string().required("Meta description is required"),
   }),
});

export default blogSchema;
