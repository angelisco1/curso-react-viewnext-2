


export const Tema01ComponentesJSX = () => {
    const nombre: string = 'Charly'
    const apellido = 'Falco'

    return (
        <div>
            <h2>Tema 01: componentes y JSX</h2>
            <p>Bienvenido {nombre} {apellido}</p>
            {/* <input maxLength="2" /> */}
            <input maxLength={2} />
        </div>
    )
}