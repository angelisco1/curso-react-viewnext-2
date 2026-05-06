export interface ICocktail {
  idDrink: string
  strDrink: string
  strDrinkAlternate: any
  strTags: string
  strVideo: any
  strCategory: string
  strIBA: string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strInstructionsES: string
  strInstructionsDE: string
  strInstructionsFR: string
  strInstructionsIT: string
  "strInstructionsZH-HANS": any
  "strInstructionsZH-HANT": any
  strDrinkThumb: string
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4: string
  strIngredient5: string
  strIngredient6: string
  strIngredient7: string
  strIngredient8: string
  strIngredient9: string
  strIngredient10: string
  strIngredient11: string
  strIngredient12: string
  strIngredient13: string
  strIngredient14: string
  strIngredient15: string
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4: any
  strMeasure5: any
  strMeasure6: any
  strMeasure7: any
  strMeasure8: any
  strMeasure9: any
  strMeasure10: any
  strMeasure11: any
  strMeasure12: any
  strMeasure13: any
  strMeasure14: any
  strMeasure15: any
  strImageSource: string
  strImageAttribution: string
  strCreativeCommonsConfirmed: string
  dateModified: string
}


export type ListaCocktails = Array<ICocktail>

export type IngredientProps = 'strIngredient1' | 'strIngredient2' | 'strIngredient3' | 'strIngredient4' | 'strIngredient5' | 'strIngredient6' | 'strIngredient7' | 'strIngredient8' | 'strIngredient9' | 'strIngredient10' | 'strIngredient11' | 'strIngredient12' | 'strIngredient13' | 'strIngredient14' | 'strIngredient15'