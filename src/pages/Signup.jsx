import React from "react";
import "./Signup.css";
import { useFormik } from "formik";
import hero2 from "../assets/hero2.jpg";

function Signup() {
    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          rePassword: "",
        },
        validate: (values) => {
          const errors = {};
    
          if (!values.firstName) {
            errors.firstName = "First name is required";
          }
    
          if (!values.lastName) {
            errors.lastName = "Last name is required";
          }
    
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email address";
          }
    
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
          }
    
          if (!values.rePassword) {
            errors.rePassword = "Please re-enter your password";
          } else if (values.rePassword !== values.password) {
            errors.rePassword = "Passwords must match";
          }
    
          return errors;
        },
        onSubmit: (values) => {
          // handle form submission, e.g., send values to an API
          console.log("Form submitted", values);
        },
      });

  return (
    <section className="hero" style={{ backgroundImage: `url(${hero2})` }}>
      <div className="content">
        <form className="form-content" onSubmit={formik.handleSubmit}>
          <h2>Welcome to GoaLa</h2>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="form-input"
            />
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="form-input"
            />
            {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-input"
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-input"
            />
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email">Re-Enter Password</label>
            <input
              id="rePassword"
              name="rePassword"
              type="rePassword"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-input"
            />
            {formik.errors.rePassword ? (
              <div>{formik.errors.rePassword}</div>
            ) : null}
          </div>


          <button type="submit" className="form-button">
            Sign up
          </button>

          <div>
            <h4>Already have an account? Sign in from here</h4>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
