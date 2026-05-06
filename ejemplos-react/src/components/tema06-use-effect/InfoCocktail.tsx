import type { ReactElement } from "react"
import type { ICocktail, IngredientProps } from "../../types/cocktails.type"

interface CocktailProps {
  cocktail: ICocktail
}

export const InfoCocktail = ({cocktail}: CocktailProps) => {

  const ingredientes: Array<ReactElement> = []

  for (let i = 0; i < 15; i++) {
    const clave: IngredientProps = `strIngredient${i+1}` as IngredientProps
    if (!cocktail[clave]) {
      break;
    }
    ingredientes.push(<li key={i}>{cocktail[clave]}</li>)
  }

  return (
    <div className="my-1" style={{textAlign: 'left'}}>
      <div>
        <h4>Ingredientes:</h4>
        <ul>
          {ingredientes}
        </ul>
      </div>
      <div>
        <h4>Instrucciones:</h4>
        <p>{cocktail.strInstructionsES ? cocktail.strInstructionsES : cocktail.strInstructions}</p>
      </div>
    </div>
  )
}