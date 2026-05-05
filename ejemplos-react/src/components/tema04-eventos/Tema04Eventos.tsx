import type { ChangeEvent, MouseEvent } from "react"

export const Tema04Eventos = () => {
	const mostrarHolaMundo = (event: MouseEvent) => {
		alert('Hola mundo!!!')
	}

	const mostrarMensaje = (mensaje: string) => {
		console.log('[MSG]: ' + mensaje)
	}

	const mostrarValorInput = (event: ChangeEvent) => {
		// console.log(valor)
		console.log('Pasa por la fn')
		const valorInput = (event.target as HTMLInputElement).value
		mostrarMensaje(valorInput)
	}


	return (
		<div>
			<h2>Tema 04: eventos</h2>

			<div>
				<button type="button" onClick={mostrarHolaMundo}>Mostrar "Hola mundo"</button>
				<button type="button" onClick={() => mostrarMensaje('Bienvenido Charly')}>Mostrar mensaje</button>
			</div>

			<div>
				<input type="text" onChange={mostrarValorInput} />
			</div>
		</div>
	)
}