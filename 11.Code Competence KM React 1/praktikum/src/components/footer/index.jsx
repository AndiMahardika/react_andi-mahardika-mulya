import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-white">
    <section className="container mx-auto grid grid-cols-4 pt-16 pb-6 font-roboto">
      <div className="">
        <h3 className="font-bold text-xl text-blue-700 mb-5">HomeSpace</h3>
        <div className="text-base font-normal mb-7">
          <p>Jalan Merpati No.87 A</p>
          <p>Yogyakarta, Depok Sleman</p>
          <p>Indonesia</p>
        </div>

        <div>
          <p className="text-base font-normal"><span className="font-bold">Phone:</span> 0858-5139-3874</p>
          <p className="text-base font-normal"><span className="font-bold">Email:</span> andi.mahardika.mulya@gmail.com</p>
        </div>
      </div>

      <div className="">
        <h3 className="font-bold text-xl text-blue-700 mb-5">Usefull Links</h3>
        <ul className="text-base font-normal space-y-2">
          <li><a className="hover:text-blue-700" href="">Home</a></li>
          <li><a className="hover:text-blue-700" href="">About Us</a></li>
          <li><a className="hover:text-blue-700" href="">Services</a></li>
          <li><a className="hover:text-blue-700" href="">Blog</a></li>
          <li><a className="hover:text-blue-700" href="">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-xl text-blue-700 mb-5">Our Services</h3>
        <ul className="text-base font-normal space-y-2">
          <li><a className="hover:text-blue-700" href="">Home Design</a></li>
          <li><a className="hover:text-blue-700" href="">Complete Amenities</a></li>
          <li><a className="hover:text-blue-700" href="">Safe & Comfortable Environment</a></li>
          <li><a className="hover:text-blue-700" href="">Security and Comfort</a></li>
          <li><a className="hover:text-blue-700" href="">Competitive Pricing</a></li>
        </ul>
      </div>

      <div className="flex flex-col-reverse pb-4">
        <ul className="flex gap-4">
          <li><a className="" href=""><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#0673c6",}} /></a></li>
          <li><a className="" href=""><FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color: "#000000",}} /></a></li>
          <li><a className="" href=""><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#e90101",}} /></a></li>
        </ul>
      </div>
    </section>
    <hr />
    <footer className="text-center text-sm font-normal py-7 font-roboto">
      Copyright ® 2024 andi mahardika mulya
    </footer>
    </div>
  )
}