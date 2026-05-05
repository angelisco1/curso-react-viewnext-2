export type SugusProps = {
    color: string,
    sabor: string,
}

// Union types
// type nullOString = null | string | number

export interface SugusProps2 {
    color?: 'yellow' | 'orange' | 'red' | 'blue',
    sabor?: 'limón' | 'naranja' | 'fresa' | 'piña',
}

// Partial<SugusProps2> -> Los hace opcionales
export interface SugusItem extends Required<SugusProps2> {
    id: number,
}

export type SugusList = Array<SugusItem>