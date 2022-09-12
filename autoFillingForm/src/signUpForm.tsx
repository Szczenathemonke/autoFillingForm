import { FormikErrors, useFormik } from "formik";
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
}

const emailRegVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegVal =
  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

const validate = (values: Values) => {
  const errors: FormikErrors<Values> = {};
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
  if (!values.date) {
    errors.date = "Required!";
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
      date: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      className="row gy-3  justify-content-center"
      onSubmit={formik.handleSubmit}
    >
      <div className="col-lg">
        <div className="form-floating ">
          <input
            className="form-control"
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          ></input>
          <label htmlFor="firstName" placeholder="john">
            First Name
          </label>
        </div>

        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="row align-items-center justify-content-center w-100">
            {formik.errors.firstName}
          </div>
        ) : (
          <div className="row align-items-center justify-content-center w-100 "></div>
        )}
      </div>
      <div className="col-lg">
        <div className="form-floating ">
          <input
            className="form-control"
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          ></input>
          <label className="col" htmlFor="lastName">
            Last Name
          </label>
        </div>

        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="row align-items-center justify-content-center w-100 ">
            {formik.errors.lastName}
          </div>
        ) : (
          <div className="row align-items-center justify-content-center w-100"></div>
        )}
      </div>
      <div className="col-md-12"></div>

      <div className="form-floating">
        <input
          className="form-control"
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
        ></input>
        <label className="col" htmlFor="email">
          email
        </label>
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className="row align-items-center justify-content-center w-100">
          {formik.errors.email}
        </div>
      ) : (
        <div className="row align-items-center justify-content-center w-100"></div>
      )}
      <div className="form-floating">
        <input
          className="form-control"
          id="phone"
          type="text"
          {...formik.getFieldProps("phone")}
        ></input>
        <label className="col" htmlFor="phone">
          Phone
        </label>
      </div>
      {formik.touched.phone && formik.errors.phone ? (
        <div className="row align-items-center justify-content-center w-100">
          {formik.errors.phone}
        </div>
      ) : (
        <div className="row align-items-center justify-content-center w-100"></div>
      )}
      <div className="form-floating">
        <input
          className="form-control"
          id="date"
          type="text"
          {...formik.getFieldProps("date")}
        ></input>
        <label className="col" htmlFor="phone">
          Date
        </label>
      </div>
      {formik.touched.date && formik.errors.date ? (
        <div className="row align-items-center justify-content-center w-100">
          {formik.errors.date}
        </div>
      ) : (
        <div className="row align-items-center justify-content-center w-100"></div>
      )}
      <button className="btn btn-primary col-6 mb-3" type="submit">
        submit form
      </button>
    </form>
  );
};

export default SignUpForm;
