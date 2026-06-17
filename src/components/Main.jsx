import React from "react"
import Ingredients from "./Ingredients.jsx"
import OpenAiRecipe from "./OpenAiRecipe.jsx"
import getRecipeFromOpenAI from "./ai.js"
export default function Main() {
  const [ingredients, setIngredients] = React.useState([])

  const [recipe, setRecipe] = React.useState(null)
  async function getRecipe() {
    const aiRecipe = await getRecipeFromOpenAI(ingredients)
    setRecipe(aiRecipe)
  }

  function addIngredient(formData) {
    const recipe = formData.get("ingredient")
    setIngredients((prev) => [...prev, recipe])
  }

  const ingredientsElements = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ))
  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          placeholder="e.g.oregano"
          className="form-input"
          name="ingredient"
          aria-label="add ingredient"
          required
        />
        <button type="submit" className="submit-btn">
          + Add ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          ingredientsElements={ingredientsElements}
          getRecipe={getRecipe}
        />
      )}

      {recipe && <OpenAiRecipe recipe={recipe} />}
    </main>
  )
}
