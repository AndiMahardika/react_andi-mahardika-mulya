import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./index.jsx";
import { useFormik } from 'formik';
import { registerSchema } from "../validation/auth.validation.js";

export default function Register() {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    },
    validateOnChange: true,
    validateOnBlur: true,
    validate: values => {
      try {
        registerSchema.parse(values);
      } catch (error) {
        return error.flatten().fieldErrors; 
      }
      return {};
    },
    onSubmit: (values, {setSubmitting}) => {
      if(formik.isValid) {
        navigate('/login')
      }
      setSubmitting(false)
    }
  })

  return (
    <AuthLayout>
      <h1 className="mb-3">Register</h1>
      <div className="container">
        <form action="" className="row g-2" onSubmit={formik.handleSubmit}>
          <div className="col-md-6 mb-2">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="fs-6 text-danger m-0">{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="fs-6 text-danger m-0">{formik.errors.lastName}</p>
            ) : null}
          </div>
          <div className="col-md-12 mb-2">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} />
            {formik.touched.username && formik.errors.username ? (
              <p className="fs-6 text-danger m-0">{formik.errors.username}</p>
            ) : null}
          </div>
          <div className="col-md-12 mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
            {formik.touched.email && formik.errors.email ? (
              <p className="fs-6 text-danger m-0">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <p className="fs-6 text-danger m-0">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpassword} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="fs-6 text-danger m-0">{formik.errors.confirmPassword}</p>
            ) : null}
          </div>
          <div className="col-12 mb-3">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center"> Have an account ? <Link to="/login">Login</Link> </p>
      </div>
    </AuthLayout>
  )
}
