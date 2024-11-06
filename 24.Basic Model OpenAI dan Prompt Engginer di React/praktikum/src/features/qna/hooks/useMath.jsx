import { useState } from 'react'
import { generateAIResponseQnA } from '../api/api-qna.jsx'

export default function useMath() {
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

    generateAIResponseQnA(input, setLoading, setHistory, history);
  }

  return { history, loading, handleSubmit }
}
