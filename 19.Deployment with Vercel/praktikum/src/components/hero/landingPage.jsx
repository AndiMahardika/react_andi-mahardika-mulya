import img from "../../assets/landing-page.png";

export default function HeroLandingPage() {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#37517E" }}>
      <div className="row justify-content-center align-items-center p-md-5">
        
        <div className="text-white col-md-6 order-md-1 order-2 mt-5 mt-md-0">
          <h1>Better Solutions For Your Business</h1>
          <p>We are a team of talented designers making websites with Bootstrap</p>
          <button type="button" className="btn btn-primary rounded-pill me-4 px-4">
            Get Started
          </button>
          <button type="button" className="btn btn-primary bg-transparent border-0">
            Watch Video
          </button>
        </div>

        <div className="col-md-6 order-md-2 order-1 mt-5 mt-md-0">
          <img src={img} className="img-fluid" alt="Landing page illustration" />
        </div>
        
      </div>
    </div>
  );
}
