import { useEffect, useState } from "react"
import { Validations, type IValidations } from "../utils/validations"


export const useInputField = (initialValue: any, validations: IValidations = {}) => {
  const [field, setField] = useState<any>(initialValue)
  const [errores, setErrores] = useState<Array<string>>([])

  useEffect(() => {
    const listaErrores: Array<string> = []

    const validationsEntries = Object.entries(validations)

    if (validationsEntries.length === 0) {
      setErrores([])
      return
    }

    validationsEntries.forEach((entry) => {
      const [validationName, validationValue] = entry

      if (validationName === 'mayus' && validationValue && Validations.checkHasMayus(field)) {
        listaErrores.push('Tiene que tener mayúsculas')
      }

      if (validationName === 'minLength' && Validations.checkMinLength(field, validationValue)) {
        listaErrores.push(`Tiene que tener al menos ${validationValue} caracteres`)
        // listaErrores.push('Tiene que tener al menos ' + validationValue + ' caracteres')
      }

      if (validationName === 'numbers' && validationValue && Validations.checkHasNumbers(field)) {
        listaErrores.push('Tiene que tener al menos un número')
      }

      if (validationName === 'email' && validationValue && Validations.checkEmail(field)) {
        listaErrores.push(`No tiene formato de email`)
      }

    })

    setErrores(listaErrores)
  }, [field])

  return [
    field,
    setField,
    errores,
  ]
}