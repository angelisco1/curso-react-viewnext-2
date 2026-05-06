import type { ICocktail } from "../../types/cocktails.type"

interface CocktailProps {
  cocktail: ICocktail
}

export const Cocktail = ({cocktail}: CocktailProps) => {
  return (
    <div className="d-flex jc-space-between my-1" style={{width: '500px', border: '1px solid white'}}>
      <h4>{cocktail.strDrink}</h4>
      <img src={cocktail.strDrinkThumb} alt="" style={{width: '50px'}} />
    </div>
  )
}

// useEffect orden:
// - fn del return del useEffect
// - render
// - useEffect