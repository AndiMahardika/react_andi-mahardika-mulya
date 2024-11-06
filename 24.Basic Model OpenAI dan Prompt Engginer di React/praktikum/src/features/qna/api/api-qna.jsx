import openai from "../../../utils/openai.js"

export const generateAIResponseQnA = async (userInput, setLoading, setHistory, history) => {
  try {
    setLoading(true)

    const initialMessage = {
      role: "system",
      content: `You are a helpful and knowledgeable math teacher. Explain concepts clearly, provide step-by-step solutions, and encourage the student in their math learning journey. 
      
      IMPORTANT:
      - Rensponse with indonesian language.`
    }

    const messages = [
      initialMessage,
      ...history.map(item => ({
        role: item.sender === "user" ? "user" : "assistant",
        content: item.message
      })),
      { role: "user", content: userInput }
    ]

    messages.push({ role: "user", content: userInput })

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