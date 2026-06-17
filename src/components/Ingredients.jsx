export default function Ingredients(props) {
  return (
    <section className="ingredients">
      <h2>Ingredients on hand:</h2>
      <ul>{props.ingredientsElements}</ul>
      {props.ingredients.length > 4 && (
        <div className="get-recipe-container">
          <div>
            <h2>Ready for a recipe?</h2>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe} className="get-recipe-btn">
            Get a recipe
          </button>
        </div>
      )}
    </section>
  )
}
