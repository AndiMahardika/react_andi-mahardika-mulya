import Card from "../../components/card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Benefits from "../../components/ui/benefits";
import Button from "../../components/ui/button";
import TextAboutUs from "./textAboutUs";
import images from "../../assets/images";
import icons from "../../assets/icon";

export default function AboutUs() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      {/* abaout us */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-32 lg:px-0 px-5 font-roboto gap-12">
        <div className="grid grid-cols-2 gap-4 content-end items-end">
          <img
            className="rounded-3xl object-cover h-60"
            src={images.aboutus1}
            alt=""
          />
          <img
            className="rounded-3xl object-cover h-96"
            src={images.aboutus2}
            alt=""
          />
        </div>
        <div className="space-y-6">
          <h3 className="font-semibold text-3xl text-blue-500">About Us</h3>
          <h1 className="font-semibold text-[40px]">HomeSpace</h1>
          <p className="text-base font-normal text-slate-500">
            At HomeSpace, we are dedicated to helping you find your dream home.
            Our mission is to provide a seamless and enjoyable experience for
            homebuyers by offering modern residential properties in prime
            locations with exceptional amenities.
          </p>
        </div>
        <div>
          <img
            src={images.aboutus3}
            alt=""
            className="rounded-3xl object-cover"
          />
        </div>
        <div>
          <img
            src={images.aboutus4}
            alt=""
            className="rounded-3xl object-cover"
          />
        </div>
      </section>

      <TextAboutUs />

      {/* benefits */}
      <section className="py-36 flex items-center gap-4">
        <div className="w-1/2 space-y-8 ps-8">
          <div className="h-2 bg-violet-700 w-1/12 mb-20"></div>
          <h3 className="font-semibold text-3xl">
            Ready to find your dream home?
          </h3>
          <p className="font-normal text-slate-500 text-xl">
            Let’s make it happen! Get in touch with us today, and we’ll help you
            take the next step toward owning the perfect home.
          </p>
          <Button transparent>Contact Us</Button>
        </div>
        <div className="w-1/2 bg-white shadow-2xl grid grid-cols-2 gap-8 p-14 rounded-s-3xl">
          <Benefits
            title="Modern House"
            color="bg-violet-100"
            img={icons.house}
          />
          <Benefits
            title="Green Living"
            color="bg-green-100"
            img={icons.tree}
          />
          <Benefits
            title="24/7 Security"
            color="bg-blue-100"
            img={icons.camera}
          />
          <Benefits
            title="Family-Friendly"
            color="bg-red-100"
            img={icons.family}
          />
        </div>
      </section>

      {/* card section  */}
      <section className="container mx-auto py-16">
        <h4 className="font-medium text-2xl mb-16">Explore Our Homes</h4>
        <div className="flex justify-between">
          <Card img={images.card} status="Available" price="5,000" />
          <Card img={images.aboutus4} status="Sold" price="5,000" />
          <Card img={images.aboutus3} status="Available" price="5,000" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
