import type { ICocktail } from "../../types/cocktails.type"

interface CocktailProps {
  cocktail: ICocktail,
  onSelectCocktail: React.Dispatch<React.SetStateAction<ICocktail | null>>
}

export const Cocktail = ({cocktail, onSelectCocktail}: CocktailProps) => {
  return (
    <div className="d-flex jc-space-between my-1" style={{width: '500px', border: '1px solid white', cursor: 'pointer'}} onClick={() => onSelectCocktail(cocktail)}>
      <h4>{cocktail.strDrink}</h4>
      <img src={cocktail.strDrinkThumb} alt="" style={{width: '50px'}} />
    </div>
  )
}
