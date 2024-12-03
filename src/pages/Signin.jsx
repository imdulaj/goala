import React from "react";
import "./Signin.css";
import hero2 from "../assets/hero2.jpg";
import { useFormik } from "formik";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <section className="hero" style={{ backgroundImage: `url(${hero2})` }}>
      <div className="content">
        

        <form className="form-content" onSubmit={formik.handleSubmit}>
        <h2>Sign in to GoaLa</h2>
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
          <button type="submit" className="form-button">
            Sign in
          </button>

          <div>
            <h4>If you don't have an account? Sign Up from here</h4>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signin;
