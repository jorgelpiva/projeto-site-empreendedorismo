import Link from "next/link";
import styles from "../styles/Navegador.module.css"

interface CabecalhoProps{
    destino: 'text'
    label: 'text'
}


export default function Navegador(props){
    return(
        <Link href={props.destino}>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}
            >{props.label}
            </div>
        </Link> 
    )
}