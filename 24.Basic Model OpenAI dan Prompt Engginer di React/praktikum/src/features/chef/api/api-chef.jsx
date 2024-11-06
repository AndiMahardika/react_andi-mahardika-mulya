import openai from "../../../utils/openai.js";

export const generateAIResponseChef = async (userInput, setLoading, setHistory, history) => {
  try {
    setLoading(true);

    const initialMessage = {
      role: "system",
      content: `You are a cooking expert, you will be given with user ingredients, and style, Please generate a recipe only with provided ingredients. 

      IMPORTANT:
      - You are allowed to add additional ingredients as long as it's an aside ingredients.
      - Do not include any ingredients such as Alcohol, Arak, and Non-Halal Ingredients.
      - Respond with Indonesian language.
      
      CRITICAL:
      - Before answer, always check if provided ingredients are edible, if not, ALWAYS EXCLUDE!`
    };

    const messages = [
      initialMessage,
      ...history.map(item => ({
        role: item.sender === "user" ? "user" : "assistant",
        content: item.message
      })),
      { role: "user", content: userInput }
    ];

    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct:free",
      messages
    });

    console.log(completion.choices[0].message.content);
    setHistory(prevHistory => [
      ...prevHistory,
      { sender: "bot", message: completion.choices[0].message.content }
    ]);

    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
