import { useEffect, useState } from "react"
import type { ListaCocktails } from "../../types/cocktails.type"
import { Cocktail } from "./Cocktail"

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const loadCocktails = async (filtro: string, setCocktails: Function) => {
  const resp = await fetch(URL + filtro)
  const data = await resp.json()
  
  console.log(data)

  if (Array.isArray(data.drinks)) {
    setCocktails(data.drinks)
  } else {
    setCocktails([])
  }
}


export const BuscadorCocktails = () => {

  const [cocktails, setCocktails] = useState<ListaCocktails>([])
  const [filtro, setFiltro] = useState<string>('')
  
  useEffect(() => {
    console.log('Ha cambiado el filtro')

    const idTimeout = setTimeout(() => {
      loadCocktails(filtro, setCocktails)
    }, 1000)

    console.log('FILTRO 1: ', filtro)


    return () => {
      console.log('FILTRO 2: ', filtro)
      clearTimeout(idTimeout)
    }
  }, [filtro])
  
  
  const componentesCocktails = cocktails.map(cocktail => {
    return <Cocktail
            key={cocktail.idDrink}
            cocktail={cocktail} />
  })
  
  return (
    <div>
      <div>
        <label htmlFor="filtro">Filtra por:</label>
        <input type="text" id="filtro" onChange={(e) => setFiltro(e.target.value)} value={filtro} />
      </div>

      <hr />

      <div>
        {componentesCocktails}
      </div>
      
    </div>
  )
}