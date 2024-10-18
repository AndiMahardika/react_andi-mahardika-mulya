import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid px-md-5">
        <div className="row px-md-5 py-4 px-3">
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 className="mb-0 text-uppercase">Arsha</h3>
            <address className="mb-4">
              <p className="mb-0 fw-light">A108 Adam Street</p>
              <p className="mb-0 ms-3 fw-light">New York, NY 535022</p>
              <p className="mb-0 ms-3 fw-light">United States</p>
            </address>
            
            <div>
              <p className="m-0 fw-light"><strong className="fw-bold">Phone:</strong> +1 5589 55488 55</p>
              <p className="m-0 fw-light"><strong className="fw-bold">Email:</strong> info@example.com</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h4>Useful Links</h4>
            <ul className="list-unstyled ms-4">
              <li className="mb-2"><Link to="/" className="text-decoration-none text-dark fw-light">Home</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">About us</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Services</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Terms of service</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Privacy policy</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h4>Our Services</h4>
            <ul className="list-unstyled ms-4">
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Web Design</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Web Development</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Product Management</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Marketing</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-dark fw-light">Graphic Design</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-lg-0">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="d-flex gap-3">
              <Link to="" className="text-decoration-none text-dark bg-primary p-3 rounded-pill"></Link>
              <Link to="" className="text-decoration-none text-dark bg-primary p-3 rounded-pill"></Link>
              <Link to="" className="text-decoration-none text-dark bg-primary p-3 rounded-pill"></Link>
              <Link to="" className="text-decoration-none text-dark bg-primary p-3 rounded-pill"></Link>
              <Link to="" className="text-decoration-none text-dark bg-primary p-3 rounded-pill"></Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="container-fluid px-md-5 text-white" style={{backgroundColor: "#37517E"}}>
        <div className="row px-md-5 px-3">
          <div className="d-md-flex justify-content-between text-center py-3">
            <h6 className="mb-0 fw-normal">© Copyright <span className="fw-bold">Arsha</span>. All Rights Reserved</h6>
            <p className="mb-0">Designed by <span style={{color: "#47B2E4"}}>BootstrapMade</span></p>
          </div>
        </div>
      </div>
    </>
  )
}
