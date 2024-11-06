import { useState } from 'react'
import { generateAIResponseChef } from '../api/api-chef.jsx'

export default function useChef() {
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

    generateAIResponseChef(input, setLoading, setHistory, history);
  }

  return { history, loading, handleSubmit }
}
