import * as yup from "yup";

const blogsCategorySchema = yup.object().shape({
   category: yup.string().required("Category is required"),
   subcategories: yup.array().of(yup.string().required("subcategory are required")),
});

export default blogsCategorySchema;
