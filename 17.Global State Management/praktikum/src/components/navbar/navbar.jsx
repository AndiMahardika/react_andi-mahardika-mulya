import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="#">Simple header</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-3 me-lg-5">
            <Link className="nav-link text-primary" to="/">Home</Link>
            <Link className="nav-link" to="/product">Create Product</Link>
            <Link className="nav-link" to="#">Features</Link>
            <Link className="nav-link" to="#">Pricing</Link>
            <Link className="nav-link" to="#">FAQs</Link>
            <Link className="nav-link" to="#">About</Link>
            <Link className="btn btn-primary mt-2 mt-lg-0" to="/login" role="button">Login</Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}