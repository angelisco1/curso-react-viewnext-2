import type { SugusItem, SugusList } from "../../types/sugus.type"
import { Sugus } from "../tema02-propiedades/Sugus"

export const Tema03CondicionalesYListas = () => {

	const isAuthenticated = false
	const listaSugus: SugusList = [
		{ id: 1, sabor: 'fresa', color: 'red' },
		{ id: 2, sabor: 'piña', color: 'blue' },
		{ id: 3, sabor: 'naranja', color: 'orange' },
		{ id: 4, sabor: 'limón', color: 'yellow' },
	]

	// let isAuthenticated = false
	// setTimeout(() => {
	// 	isAuthenticated = true
	// 	console.log('Cambiado a true')
	// }, 3000)

	let boton = <button>Login</button>
	if (isAuthenticated) {
		boton = <button>Logout</button>
	}

	let boton2 = isAuthenticated ? <button>Logout</button> : <button>Login</button>

	// const componentesSugus = listaSugus.map((sugus: SugusItem, pos: number) => {
	// 	return <Sugus key={pos} color={sugus.color} sabor={sugus.sabor} />
	// })

	const componentesSugus = listaSugus.map((sugus: SugusItem) => {
		return <Sugus key={sugus.id} color={sugus.color} sabor={sugus.sabor} />
	})

	
	return (
		<div>

			<h2>Tema 03: condicionales y listas</h2>

			<h3>Condicionales</h3>
			<div>
				{isAuthenticated ? <button>Logout</button> : <button>Login</button>}
				{boton}
				{boton2}
			</div>


			<h3>Listas</h3>
			<div className="d-flex jc-center">
				{componentesSugus}
			</div>


		</div>
	)
}