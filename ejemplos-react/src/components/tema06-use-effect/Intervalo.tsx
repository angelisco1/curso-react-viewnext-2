import { useEffect, useState } from "react"


export const Intervalo = () => {
  const [numero, setNumero] = useState<number>(0)
  const [numero2, setNumero2] = useState<number>(0)

  useEffect(() => {
    console.log('Pasa por el useEffect')

    // setInterval(() => {
    //   console.log('Pasa por el setTimeout')
    //   setNumero(numero + 1)
    // }, 1000)

    setTimeout(() => {
      console.log('Pasa por el setTimeout')
      setNumero(numero + 1)
    }, 3000)
    
  }, [])
  
  return (
    <div>

      <p>{numero}</p>
      <p>{numero2}</p>
      <button onClick={() => setNumero2(10)}>Cambiar numero</button>
      
    </div>
  )
}