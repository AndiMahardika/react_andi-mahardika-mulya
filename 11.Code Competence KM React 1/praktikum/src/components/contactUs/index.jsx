import Button from "../ui/button";

export default function ContactUs() {
  return (
    <>
      <section className="bg-blue-200 py-14 font-roboto">
        <section className="text-center space-y-4 mb-14">
          <h3 className="text-3xl font-normal">Contact Us</h3>
          <p className="font-medium text-sm text-slate-500">Have questions? We're here to help! Reach out to us for inquiries or assistance.</p>
        </section>

        <section className="w-[670px] mx-auto">
          <form action="" className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium block">First Name</label>
                <input type="text" className="rounded-md border border-slate-300 px-4 py-2 w-full" id="firstName" />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium block">Last Name</label>
                <input type="text" className="rounded-md border border-slate-300 px-4 py-2 w-full" id="lastName"/>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium block">Email Address</label>
              <input type="email" className="rounded-md border border-slate-300 px-4 py-2 w-full" id="email"/>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium block">Message</label>
              <textarea className="rounded-md border border-slate-300 px-4 py-2 w-full" rows={5} id="message" />
            </div>
          </form>
          <div className="flex justify-end mt-14">
            <Button>Send Message</Button>
          </div>
        </section>
      </section>
    </>
  )
}