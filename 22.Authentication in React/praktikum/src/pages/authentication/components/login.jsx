import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./index.jsx";
import { useFormik } from 'formik';
import { loginSchema } from "../validation/auth.validation.js";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (values) => {
    const dummyUser = {
      email: "admin@gmail.com",
      password: "admin123"
    }

    if(values.email == dummyUser.email && values.password == dummyUser.password) {
      localStorage.setItem("isLogin", true)
      navigate("/product")
    } 
    setIsLogin(false)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: values => {
      try {
        loginSchema.parse(values);
      } catch (error) {
        return error.flatten().fieldErrors; 
      }
      return {};
    },
    onSubmit: (values, {setSubmitting}) => {
      if(formik.isValid) {
        handleLogin(values)
      }
      setSubmitting(false)
    },
  })

  return (
    <AuthLayout>
      <h1 className="mb-3">Login</h1>
      <div className="container">
        <form action="" className="row d-flex flex-column justify-content-center align-items-center" onSubmit={formik.handleSubmit}>
          <div className="col-md-8 mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? (
              <p className="fs-6 text-danger m-0">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="col-md-8 mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <p className="fs-6 text-danger m-0">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="col-8 mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        {!isLogin && <p className="fs-6 text-danger m-0 text-center">Invalid Credentials</p>}
        <p className="text-center"> Don&#39;t have an account ? <Link to="/register">Register</Link> </p>
      </div>
    </AuthLayout>
  )
}
