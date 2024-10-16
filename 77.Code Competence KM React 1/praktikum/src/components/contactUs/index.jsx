import { useState } from "react";
import Button from "../ui/button";

export default function ContactUs() {
  const [dataContacts, setDataContacts] = useState([])

  function handleSubmit (e) {
    e.preventDefault()

    const dataForm = new FormData(e.currentTarget)
    const firstName = dataForm.get('firstName')
    const lastName = dataForm.get('lastName')
    const email = dataForm.get('email')
    const message = dataForm.get('message')

    const newData = {firstName, lastName, email, message}

    setDataContacts([...dataContacts, newData])
  }

  return (
    <>
      <section className="bg-blue-200 py-14 font-roboto" id="contact">
        <section className="text-center space-y-4 mb-14">
          <h3 className="text-3xl font-normal">Contact Us</h3>
          <p className="font-medium text-sm text-slate-500">Have questions? We&#39;re here to help! Reach out to us for inquiries or assistance.</p>
        </section>

        {/* form  */}
        <section className="w-[670px] mx-auto">
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium block">First Name</label>
                <input type="text" name="firstName" className="rounded-md border border-slate-300 p-2 w-full focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:ring-1" id="firstName" required autoComplete="off" />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium block">Last Name</label>
                <input type="text" name="lastName" className="rounded-md border border-slate-300 p-2 w-full focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:ring-1" id="lastName" required autoComplete="off"/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium block">Email Address</label>
              <input type="email" name="email" className="rounded-md border border-slate-300 p-2 w-full focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:ring-1" id="email" required/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm font-medium block">Message</label>
              <textarea className="rounded-md border border-slate-300 p-2 w-full focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:ring-1" rows={5} id="message" name="message" required autoComplete="off"/>
            </div>
            <div className="flex justify-end mt-14">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </section>

        {/* table */}
        { dataContacts.length > 0 && (<section className="w-9/12 mx-auto mt-12 rounded-md overflow-hidden">
          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-white">
                  <thead className="text-xs uppercase bg-blue-600">
                      <tr>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              First Name
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Last Name
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Email address
                          </th>
                          <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              Message
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {dataContacts && dataContacts.map((contact, index) => 
                      <tr className="bg-white border-b text-slate-600 font-medium" key={index}>
                        <th scope="row" className="px-6 py-4 font-medium text-blue-600 whitespace-nowrap">
                          {contact.firstName}
                        </th>
                        <td className="px-6 py-4">
                          {contact.lastName}
                        </td>
                        <td className="px-6 py-4">
                          {contact.email}
                        </td>
                        <td className="px-6 py-4">
                          {contact.message}
                        </td>
                      </tr>
                    )}
                  </tbody>
              </table>
          </div>
        </section>) }
      </section>
    </>
  )
}