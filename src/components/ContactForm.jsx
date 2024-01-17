import { Formik } from "formik";
import { cn } from "../utils";
import * as yup from "yup";
import Input from "./Input";

const loginSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Don't forget your email"),
  message : yup.string().required("Don't forget your message")
});

const initialValuesLogin = {
  name: "",
  email: "",
  message: "",
  
};
const ContactForm = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    // FORM SUBMISSION LOGIC HERE
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className={cn("grid grid-cols-6 gap-4")}>
          <Input
            label="Name"
            name="name"
            type="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />

          <textarea 
          className="col-span-6 bg-blue font-semibold placeholder-white px-6 py-2 rounded-md outline-none font-palanquin placeholder:font-palanquin"
          name="message"
          placeholder="Your message?"
          rows="5"
          cols="10"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
         />
          {touched.message && <div className="col-span-6 text-red text-sm font-palanquin">{errors.message}</div>}
          <button 
          className={cn("bg-red px-24 col-span-6 font-palanquin py-3 sm:py-4 rounded-md",
          touched.message && errors.message  && "border-red-500")} type="submit">Send message</button>
        </form>
        
      )}
    </Formik>
  );
};

export default ContactForm;
