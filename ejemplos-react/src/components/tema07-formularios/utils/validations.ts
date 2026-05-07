export interface IValidations {
  mayus?: boolean,
  minLength?: number,
  numbers?: boolean,
  email?: boolean,
}


export class Validations {
  static checkEmail(email: string): boolean {
    return !/\w+@\w+\.\w+/.test(email)
  }

  static checkHasNumbers(field: string): boolean {
    return !/\d+/.test(field)
  }

  static checkHasMayus(field: string): boolean {
    return field.toLocaleLowerCase() === field
  }

  static checkMinLength(field: string, minLength: number): boolean {
    return field.length < minLength
  }
}