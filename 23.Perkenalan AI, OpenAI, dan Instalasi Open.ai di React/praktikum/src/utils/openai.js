import OpenAI from "openai"

const OPENROUTER_API_KEY="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"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true 
})

export default openai