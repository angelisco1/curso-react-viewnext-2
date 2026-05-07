import { useEffect, useState } from "react"
import type { ICocktail, ListaCocktails } from "../../types/cocktails.type"
import { Cocktail } from "./Cocktail"
import { InfoCocktail } from "./InfoCocktail"

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const loadCocktails = async (filtro: string): Promise<ListaCocktails> => {
  const resp = await fetch(URL + filtro)
  const data = await resp.json()
  
  console.log(data)

  if (Array.isArray(data.drinks)) {
    return data.drinks
  } else {
    return []
  }
}


export const BuscadorCocktails = () => {

  const [cocktails, setCocktails] = useState<ListaCocktails>([])
  const [filtro, setFiltro] = useState<string>('')
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState<ICocktail | null>(null)
  

  // useEffect orden:
  // - fn del return del useEffect
  // - render
  // - useEffect
  useEffect(() => {
    console.log('Ha cambiado el filtro')

    const idTimeout = setTimeout(async () => {
      const cocktails = await loadCocktails(filtro)
      setCocktails(cocktails)
    }, 1000)

    console.log('FILTRO 1: ', filtro)

    return () => {
      console.log('FILTRO 2: ', filtro)
      clearTimeout(idTimeout)
    }
  }, [filtro])

  useEffect(() => {
    if (filtro === '') {
      setCocktailSeleccionado(null)
    }
  }, [filtro])
  
  
  const componentesCocktails = cocktails.map(cocktail => {
    return <Cocktail
            key={cocktail.idDrink}
            cocktail={cocktail}
            onSelectCocktail={setCocktailSeleccionado} />
  })
  
  return (
    <div>
      <div>
        <label htmlFor="filtro">Filtra por:</label>
        <input type="text" id="filtro" onChange={(e) => setFiltro(e.target.value)} value={filtro} />
      </div>

      <hr />

      <div>
        {componentesCocktails.length > 0 ? componentesCocktails : <p>No se han encontrado cocktails con el nombre: {filtro}</p>}
      </div>
      
      <div>
        {/* {cocktailSeleccionado ? <InfoCocktail cocktail={cocktailSeleccionado} /> : null} */}
        {/* {cocktailSeleccionado && <InfoCocktail cocktail={cocktailSeleccionado} />} */}
        {cocktailSeleccionado ? <InfoCocktail cocktail={cocktailSeleccionado} /> : <p>Selecciona un cocktail para ver su información</p>}
      </div>

    </div>
  )
}