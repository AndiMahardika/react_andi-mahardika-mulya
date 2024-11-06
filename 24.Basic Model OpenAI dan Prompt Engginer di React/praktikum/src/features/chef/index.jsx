import ReactMarkdown from 'react-markdown'
import Header from "../../components/Header.jsx"
import useChef from './hooks/useChef.jsx'

export default function Chef(){
  const { history, loading, handleSubmit } = useChef()

  return (
    <main className="bg-slate-200">
      <section className="max-w-3xl mx-auto h-screen bg-white border-x-4 border-slate-600 flex flex-col justify-between bg-[url('https://i.pinimg.com/564x/ee/cf/e2/eecfe24f6f4505c44fd82c5e7902918e.jpg')]">
        <Header/>

        {/* chat box */}
        <div className="p-3 space-y-2 flex-1 overflow-scroll">
          {history.map((item, index) => (
            <div key={index} className={`w-full grid text-white ${item.sender === "user" ? "justify-items-end pl-10 " : "justify-items-start pr-10"}`}>
              { item.sender === "user" ? 
                <p className="bg-emerald-600 text-sm p-2 rounded-md text-white">{item.message}</p> 
              : 
                <p className="bg-slate-600 text-sm p-2 rounded-md text-white">
                  <ReactMarkdown>{item.message}</ReactMarkdown>
                </p>
              }
            </div>
          ))}
          {loading && 
            <div className="w-full bot grid justify-items-start pr-10">
              <p className="bg-slate-600 text-sm p-2 rounded-md text-white">Bot is typing...</p>
            </div>
          }
        </div> 

        <form action="" className="flex gap-2 mb-2 mx-2" onSubmit={handleSubmit}>
          <input type="text" name="input" placeholder="Type your message" className="bg-slate-200 border-2 border-slate-300 w-full py-1 px-2 rounded-md" disabled={loading} autoComplete="off"/>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </section>
    </main>
  )
}