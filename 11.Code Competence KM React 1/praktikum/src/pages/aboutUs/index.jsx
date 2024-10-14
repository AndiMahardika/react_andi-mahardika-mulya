import Card from "../../components/card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Benefits from "../../components/ui/benefits";
import Button from "../../components/ui/button";

export default function AboutUs() {
  return (
    <div className="bg-slate-50">
      <Navbar/>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-32 lg:px-0 px-5 font-roboto gap-12" >
        <div className="grid grid-cols-2 gap-4 content-end items-end">
          <img className="rounded-3xl object-cover h-60" src="src\assets\house.jpg" alt="" />
          <img className="rounded-3xl object-cover h-96" src="src\assets\house.jpg" alt="" />
        </div>
        <div className="space-y-6">
          <h3 className="font-semibold text-3xl text-blue-500">About Us</h3>
          <h1 className="font-semibold text-[40px]">HomeSpace</h1>
          <p className="text-base font-normal text-slate-500">At HomeSpace, we are dedicated to helping you find your dream home. Our mission is to provide a seamless and enjoyable experience for homebuyers by offering modern residential properties in prime locations with exceptional amenities.</p>
        </div>
        <div>
          <img src="src\assets\house-3.jpg" alt="" className="rounded-3xl object-cover" />
        </div>
        <div>
          <img src="src\assets\house-3.jpg" alt="" className="rounded-3xl object-cover" />
        </div>
      </section>

      <section className="container mx-auto text-xl font-medium text-slate-500 space-y-7">
        <p>HomeSpace was founded with a vision to transform the home-buying experience. We understand that finding the perfect home is more than just a transaction; it's about creating a lifestyle that reflects your values and aspirations. Our team of passionate professionals is committed to guiding you through every step of the process, from exploring a diverse range of modern residences to understanding financing options that suit your needs.</p>
        <p>We take pride in curating properties that offer not just stylish designs, but also a sense of community and belonging. Each home is selected with care, ensuring that it meets the highest standards of comfort and security. Our platform is designed to be user-friendly, making it easy for you to navigate and discover the ideal living space for you and your family.</p>
        <p>At HomeSpace, we believe in building lasting relationships with our clients, ensuring that your home journey is as smooth and enjoyable as possible. We are more than just a real estate platform; we are your partner in finding the perfect space to call home.</p>
      </section>

      <section className="py-36 flex items-center gap-4">
        <div className="w-1/2 space-y-8 ps-8">
          <div className="h-2 bg-violet-700 w-1/6 mb-20"></div>
          <h3 className="font-semibold text-3xl">Ready to find your dream home?</h3>
          <p className="font-normal text-slate-500 text-xl">Let’s make it happen! Get in touch with us today, and we’ll help you take the next step toward owning the perfect home.</p>
          <Button transparent>Contact Us</Button>
        </div>
        <div className="w-1/2 bg-white shadow-2xl grid grid-cols-2 gap-8 p-14 rounded-s-3xl">
          <Benefits title="Modern House" color="bg-violet-100" img="src\assets\houseIcon.png"/>
          <Benefits title="Green Living"  color="bg-green-100" img="src\assets\treeIcon.png"/>
          <Benefits title="24/7 Security" color="bg-blue-100" img="src\assets\cameraIcon.png" />
          <Benefits title="Family-Friendly"  color="bg-red-100" img="src\assets\familyIcon.png" />
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h4 className="font-medium text-2xl mb-16">Explore Our Homes</h4>
        <div className="flex flex-wrap gap-8">
          <Card img="src\assets\house.jpg" status="Available" price="5,000"/>
          <Card img="src\assets\house.jpg" status="Sold" price="5,000"/>
          <Card img="src\assets\house.jpg" status="Available" price="5,000"/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}