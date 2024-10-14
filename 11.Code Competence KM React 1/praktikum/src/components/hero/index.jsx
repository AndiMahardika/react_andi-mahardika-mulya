import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-32 gap-24 lg:px-0 px-5 font-roboto">
      <div className="space-y-6">
        <h1 className="font-semibold text-[40px]">Welcome to <span className="text-blue-500">HomeSpace</span> where your journey to finding the perfect home begins.</h1>
        <p className="text-base font-normal text-slate-500">Discover your dream home with us. At HomeSpace, we’re here to help you find the perfect home that suits your lifestyle and needs. Explore a wide range of modern homes in prime locations, designed to offer you and your family the ultimate comfort and convenience.</p>
        <div className="flex space-x-4">
          <Button>Contact Us</Button>
          <Button transparent>View more</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img className="rounded-3xl object-cover" src="src\assets\house.jpg" alt="" />
        <img className="rounded-3xl object-cover" src="src\assets\house.jpg" alt="" />
        {/* <img className="col-span-2 rounded-3xl object-cover" src="src\assets\house-3.jpg" alt="" /> */}
        <img className="col-span-2 rounded-3xl object-cover h-72 w-full" src="https://i.pinimg.com/736x/31/c5/19/31c51965559ad1c8e6efcb2f014b6455.jpg" alt="" />
      </div>
    </section>
  )
}