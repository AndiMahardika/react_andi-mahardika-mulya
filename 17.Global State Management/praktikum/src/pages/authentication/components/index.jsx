/* eslint-disable react/prop-types */
export default function AuthLayout({children}) {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-6 bg-primary"></div>
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
