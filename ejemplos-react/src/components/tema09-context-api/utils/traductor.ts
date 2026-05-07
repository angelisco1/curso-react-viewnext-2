// TODO: Cambiar este any
const TRADUCCIONES: any = {
  es: {
    'bienvenido': 'Bienvenido',
    'adios': 'Adios',
  },
  en: {
    'bienvenido': 'Welcome',
    'adios': 'Bye',
  },
  it: {
    'bienvenido': 'Benvenuti',
    'adios': '...',
  },
}

export class Traductor {

  static traducir(texto: string, lang: string): string {
    return TRADUCCIONES[lang][texto]
  }


}