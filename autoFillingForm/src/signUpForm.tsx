import { useFormik } from "formik";
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  street1: string;
  street2: string;
  city: string;
  country: string;
}

const emailRegVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegVal =
  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

const validate = (values: Values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required!";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "Required!";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = "Required!";
  } else if (!emailRegVal.test(values.email)) {
    errors.email = "Invalid email";
  }
  if (!values.phone) {
    errors.phone = "Required!";
  } else if (!phoneRegVal.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }
  return errors;
};
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
      street1: "",
      street2: "",
      city: "",
      country: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      ></input>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...formik.getFieldProps("lastName")}
      ></input>
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">email</label>
      <input id="email" type="email" {...formik.getFieldProps("email")}></input>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="phone">Phone</label>
      <input id="phone" type="text" {...formik.getFieldProps("phone")}></input>
      {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
      ) : null}

      <button type="submit">X</button>
    </form>
  );
};

export default SignUpForm;
