

interface ContadorSinEstadoProps {
  cuenta: number,
  onChangeCuenta: (nuevaCuenta: number) => void
}

export const ContadorSinEstado = ({ cuenta, onChangeCuenta }: ContadorSinEstadoProps) => {

  const incrementar = () => {
    console.log('Incrementando el contador')
    onChangeCuenta(cuenta + 1)
  }

  const decrementar = () => {
    onChangeCuenta(cuenta - 1)
  }
  
  return (
    <div className="d-flex jc-center">
      <button className="mx-1" onClick={decrementar}>-</button>
      <span className="mx-1">{cuenta}</span>
      {/* EJERCICIO: poner un input (campo numerico), y cambiar la cuenta por el valor introducido en el input */}
      <input type="number" onChange={(event) => onChangeCuenta(Number(event.target.value))} value={cuenta} />
      <button className="mx-1" onClick={incrementar}>+</button>
    </div>
  )
}