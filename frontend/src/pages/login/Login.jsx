import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArtImg from "../../assets/Art.png";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-flex">
      <div className="left-side container-flex-center">
        <img src={ArtImg} alt="" className="art-img" />
        <h2 className="">
          Welcome aboard my friend <br />
          <span>just a couple of clicks and we start</span>
        </h2>
      </div>
      <div className="right-side container-flex-center">
        <h2 className="login-title">Login</h2>
        {/* form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="text-field">
            <MdOutlineEmail />
            <input type="email" placeholder="Email" />
          </div>
          <div className="text-field">
            <CiLock />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            {showPassword ? (
              <IoEyeOutline
                className="icon-btn"
                onClick={handleTogglePasswordVisibility}
              />
            ) : (
              <IoEyeOffOutline
                className="icon-btn"
                onClick={handleTogglePasswordVisibility}
              />
            )}
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
          <Link to={"/register"} className="link">
            Have no account yet?
          </Link>
          <Link to={"/register"} className="link-btn">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <Formik
initialValues={{ email: "", password: "" }}
validate={(values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 3) {
    errors.password = "Password must be at least 3 characters long";
  }
  return errors;
}}
onSubmit={(values, { setSubmitting }) => {
  console.log("object", values);
  setSubmitting(false);
}}
>
{({ isSubmitting }) => (
  <Form className="login-form">
    <div className="login-field-box">
      <MdOutlineEmail />
      <Field
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Email"
      />
    </div>
    <div className="field-error">
      <ErrorMessage
        name="email"
        component="div"
        className="field-error"
      />
    </div>
    <div className="login-field-box">
      <CiLock />
      <Field
        type="password"
        name="password"
        autoComplete="off"
        placeholder="Password"
      />
    </div>
    <div className="field-error">
      <ErrorMessage name="password" component="div" />
    </div>
    <button
      className="login-form-button"
      type="submit"
      disabled={isSubmitting}
    >
      Login
    </button>
    <div className="register-link">
      <p className="">Have no account yet?</p>
      <Link to={"/register"} className="">
        Register
      </Link>
    </div>
  </Form>
)}
</Formik> */
}
