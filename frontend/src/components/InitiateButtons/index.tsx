import styles from "./style.module.css"
import alternativas from "../../assets/alternativas.png"

interface Props{

}

const InitiateButton = ({}: Props) => {
    return(
        <div className={styles.container}>
            <img src={alternativas} className={styles.alternativas}/>
        </div>
    )
}

export default InitiateButton