import { FormikErrors, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

interface Values {
  name: string;
  email: string;
  date: string;
  kids: string;
  adults: string;
}

const emailRegVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (values: Values) => {
  const errors: FormikErrors<Values> = {};
  if (!values.name) {
    errors.name = "Required!";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required!";
  } else if (!emailRegVal.test(values.email)) {
    errors.email = "Invalid email";
  }
  if (!values.date) {
    errors.date = "Required!";
  }
  if (!values.adults) {
    errors.kids = "There must be atleast 1 adult";
  }
  if (!values.adults) {
    errors.adults = "There must be atleast 1 adult";
  }

  return errors;
};
const SignUpForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      kids: "",
      adults: "",
    },
    validate,
    onSubmit: (values) => {
      fetch("http://localhost:8000/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        navigate("/Summary");
      });
    },
  });

  return (
    <form
      className="row gy-3  justify-content-center "
      onSubmit={formik.handleSubmit}
    >
      <div className="row">
        <div className="col-lg">
          <div className="form-floating">
            <input
              className="form-control"
              id="name"
              type="text"
              {...formik.getFieldProps("name")}
            ></input>
            <label htmlFor="name" placeholder="john">
              Name
            </label>
          </div>

          {formik.touched.name && formik.errors.name ? (
            <div className="row align-items-center justify-content-center w-100">
              {formik.errors.name}
            </div>
          ) : (
            <div className="row align-items-center justify-content-center w-100 "></div>
          )}
        </div>
        <div className="col-lg">
          <div className="form-floating ">
            <input
              className="form-control"
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
            ></input>
            <label className="col" htmlFor="email">
              E-mail
            </label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="row align-items-center justify-content-center w-100">
              {formik.errors.email}
            </div>
          ) : (
            <div className="row align-items-center justify-content-center w-100"></div>
          )}
        </div>
      </div>
      <div className="col-7 col-l-3">
        <div className="form-floating">
          <input
            className="form-control"
            id="date"
            type="date"
            min={new Date().toJSON().slice(0, 10)}
            {...formik.getFieldProps("date")}
          ></input>
          <label className="col" htmlFor="date">
            Date
          </label>
        </div>

        {formik.touched.date && formik.errors.date ? (
          <div className="row align-items-center justify-content-center w-100 ">
            {formik.errors.date}
          </div>
        ) : (
          <div className="row align-items-center justify-content-center w-100"></div>
        )}
      </div>
      <div className="col-lg-12"></div>
      <div className="row">
        <div className="col-lg">
          <div className="form-floating">
            <input
              className="form-control"
              id="kids"
              type="number"
              {...formik.getFieldProps("kids")}
            ></input>
            <label className="col" htmlFor="kids">
              Number of Kids
            </label>
          </div>
          {formik.touched.kids && formik.errors.kids ? (
            <div className="row align-items-center justify-content-center w-100">
              {formik.errors.kids}
            </div>
          ) : (
            <div className="row align-items-center justify-content-center w-100"></div>
          )}
        </div>
        <div className="col-lg">
          <div className="form-floating">
            <input
              className="form-control"
              id="adults"
              type="number"
              {...formik.getFieldProps("adults")}
            ></input>
            <label className="col" htmlFor="adults">
              Number of Adults
            </label>
          </div>
          {formik.touched.adults && formik.errors.adults ? (
            <div className="row align-items-center justify-content-center w-100">
              {formik.errors.adults}
            </div>
          ) : (
            <div className="row align-items-center justify-content-center w-100"></div>
          )}
        </div>
      </div>

      <button className="btn btn-primary col-6 mb-3" type="submit">
        Order
      </button>
    </form>
  );
};

export default SignUpForm;
