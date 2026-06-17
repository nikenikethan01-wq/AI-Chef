import ReactMarkdown from "react-markdown"
export default function OpenAiRecipe(props) {
  console.log(props.recipe)
  return (
    <section className="ai-recipe">
      <h1 className="suggested-title">Suggested recipe:</h1>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}
