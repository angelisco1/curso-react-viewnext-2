import type { SugusProps2 } from '../../types/sugus.type'
import './Sugus.css'

interface Styles {
    envoltorio: React.CSSProperties
    letras: React.CSSProperties
}

const styles: Styles = {
    envoltorio: {
        border: '1px solid black',
        width: '100px',
        height: '100px',
        borderRadius: '5px',
        color: 'white',
        position: 'relative',
        margin: '10px',
        overflow: 'hidden',
    },
    letras: {
        textAlign: 'center',
        transformOrigin: 'center center',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '25px',
        left: '30px',
        textShadow: '60px 0px 0px, -60px 0px 0px, -25px 30px 0px, 25px -30px 0px, 30px 30px 0px, -30px -30px 0px, 0px 60px 0px, 0px -60px 0px',
    }
}


// export const Sugus = (props: SugusProps2) => {
export const Sugus = ({color = 'red', sabor = 'fresa'}: SugusProps2) => {
    // console.log(props)

    // const sabor = 'limón'
    // const color = 'yellow'
    // const sabor = props.sabor
    // const color = props.color

    return (
        // <div style={
        //     {
        //         ...styles.envoltorio,
        //         backgroundColor: color
        //     }
        // }>
        //     <p style={styles.letras}>
        //         {sabor}
        //     </p>
        // </div>
        <div className="envoltorio" style={{backgroundColor: color}}>
            <p className="letras">
                {sabor}
            </p>
        </div>
    )
}