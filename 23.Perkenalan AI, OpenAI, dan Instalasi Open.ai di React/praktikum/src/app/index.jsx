export default function App(){
  return (
    <main className="bg-slate-200">
      <section className="max-w-3xl mx-auto h-screen bg-white border-x-4 border-slate-600 flex flex-col justify-between bg-[url('https://i.pinimg.com/564x/20/99/f2/2099f2dda704cb708fe20347afb964ba.jpg')] ">
        <div className="py-1 bg-blue-500 text-white">
          <h1 className="text-center text-2xl font-bold">Chat AI</h1>
        </div>

        {/* chat box */}
        <div className="p-3 space-y-2 flex-1 overflow-scroll">
          <div className="w-full user grid justify-items-end pl-10">
            <p className="bg-emerald-600 text-sm p-2 rounded-md text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero rerum magnam error, sequi cumque aliquid, maxime dolorem doloribus molestias dolorum animi a sit quidem ut necessitatibus nisi, expedita eveniet eius.</p>
          </div>

          <div className="w-full bot grid justify-items-start pr-10">
            <p className="bg-slate-600 text-sm p-2 rounded-md text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus deleniti consequatur, cumque, quia doloremque molestias earum in tenetur vel dolorum quidem. Minus, libero. At a, ea vitae fugit consectetur libero?</p>
          </div>
        </div>

        <form action="" className="flex gap-2 mb-2 mx-2">
          <input type="text" placeholder="Type your message" className="bg-slate-200 border-2 border-slate-300 w-full py-2 px-4 rounded-md" />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Send</button>
        </form>
      </section>
    </main>
  )
}