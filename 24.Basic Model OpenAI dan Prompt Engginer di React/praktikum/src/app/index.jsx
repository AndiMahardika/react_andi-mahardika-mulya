import React, { useState } from "react"
import openai from "../utils/openai.js"
import ReactMarkdown from 'react-markdown'

export default function App(){
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const input = form.get("input")
    e.target.reset()

    setHistory(prevHistory => [
      ...prevHistory,
      { sender: "user", message: input },
    ])

    generateAIResponse(input)
  }

  const generateAIResponse = async (userInput) => {
    try {
      setLoading(true)

      const messages = history.map(item => ({
        role: item.sender === "user" ? "user" : "assistant",
        content: item.message
      }))

      messages.push({ role: "user", content: userInput })
      // console.log({ messages })

      const completion = await openai.chat.completions.create({
        model: "mistralai/mistral-7b-instruct:free",
        messages
      })
      
      console.log(completion.choices[0].message.content)
      setHistory(prevHistory => [
        ...prevHistory,
        { sender: "bot", message: completion.choices[0].message.content }
      ])

      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="bg-slate-200">
      <section className="max-w-3xl mx-auto h-screen bg-white border-x-4 border-slate-600 flex flex-col justify-between bg-[url('https://i.pinimg.com/564x/20/99/f2/2099f2dda704cb708fe20347afb964ba.jpg')] ">
        <div className="py-1 bg-blue-500 text-white">
          <h1 className="text-center text-2xl font-bold">Chat AI</h1>
        </div>

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