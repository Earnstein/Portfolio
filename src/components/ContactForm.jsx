import { Formik } from "formik";
import { cn } from "../utils";
import * as yup from "yup";
import Input from "./Input";

const loginSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup.string().email("Invalid email").required("This field is required."),
  message : yup.string().required("This field is required.")
});

const initialValuesLogin = {
  name: "",
  email: "",
  message: "",
  
};
const ContactForm = () => {
  const handleFormSubmit = async ( { resetForm }) => {
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
        handleChange
      }) => (
        <form 
        method="POST"
        target="_blank"
        action="https://formsubmit.co/75435e97eb423dc7ba50e031f2b4362f"
        className={cn("grid grid-cols-6 gap-4")}>
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
          className="col-span-6 bg-blue font-semibold placeholder-white px-6 py-2 rounded-sm outline-none font-palanquin placeholder:font-palanquin"
          name="message"
          placeholder="Your message?"
          rows="4"
          cols="10"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
         />
          {touched.message && errors.message && <div className="col-span-6 text-red text-sm font-palanquin">{errors.message}</div>}
          <button
            className="rounded-sm bg-gradient-rainblue py-0.5 px-0.5 col-span-6 sm:col-span-3"
            type="submit"
          >
            <span
              className="bg-deep-blue hover:text-red transition
           duration-500 flex items-center justify-center font-playfair py-2 sm:py-3"
            >
              Send message.
            </span>
          </button>
        </form>
        
      )}
    </Formik>
  );
};

export default ContactForm;
