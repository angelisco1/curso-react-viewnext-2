import { Sugus } from "./Sugus"

export const Tema02Propiedades = () => {

	return (
		<div>
			<h2>Tema 02: propiedades</h2>

			<div className="d-flex jc-center">
				<Sugus color="yellow" sabor="limón" />
				<Sugus color="blue" sabor="piña" />
				<Sugus color="orange" sabor="naranja" />
				<Sugus />
			</div>

		</div>
	)
}

// () => {}
// .forEach .map .filter

// Parentesis en los parametros opcionales si solo hay 1 parametro
// Llaves y return juntos siempre
// [1, 2, 3, 4].map((num) => num * 2)
// [1, 2, 3, 4].map(num => {return num * 2})
// [1, 2, 3, 4].map(() => {return true})
// [1, 2, 3, 4].map((num, position) => num * position)