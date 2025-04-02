import styles from "./style.module.css"
import alternativas from "../../assets/alternativas.png"

interface Props{
    title: ""
    imageURL: ""
}

const InitiateButton = ({title, imageURL}: Props) => {
    return(
        <div className={styles.container}>
            <img src={imageURL} className={styles.image}/>
            <p className={styles.text}>{title}</p>
            <button className={styles.initiate_button}><p className={styles.text}>Iniciar</p></button>
        </div>
    )
}

export default InitiateButton