import OpenAI from "openai"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
You don't need to use every ingredient they mention in your recipe.
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
Strictly the ingridents should be in list format.
Dish name should strictly contain the name of the dish.
Format your response in markdown to make it easier to render to a web page.
`

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  baseURL: import.meta.env.VITE_OPENAI_BASE_URL,
  dangerouslyAllowBrowser: true,
})

export default async function getRecipeFromOpenAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")
  try {
    const response = await openai.chat.completions.create({
      model: import.meta.env.VITE_OPENAI_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    })
    return response.choices[0].message.content
  } catch (err) {
    console.error(err.message)
  }
}
