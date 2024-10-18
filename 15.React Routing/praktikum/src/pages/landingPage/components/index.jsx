import Footer from "../../../components/footer/index.jsx";
import HeroLandingPage from "../../../components/hero/landingPage.jsx";
import Navbar from "../../../components/navbar/navbar.jsx";
import "../../../index.css"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroLandingPage/>

      {/* search */}
      <div className="container-fluid p-md-5 py-4" style={{backgroundColor: "#F3F5FA"}}>
        <div className="row">
          <div className="col-lg-6 text-center mx-auto">
            <h2>Join Our Newsletter</h2>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <div className="position-relative mt-4">
              <input type="text" className="form-control rounded-pill pe-5" />
              <button className="btn btn-primary rounded-pill position-absolute end-0 top-0 z-index-1" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
