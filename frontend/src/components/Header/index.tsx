import styles from "./style.module.css"
import userImage from "../../assets/user.svg"
import fatec from "../../assets/fatec.png"

interface Props{

}

const Header =({}: Props) => {
    return(
        <div className={styles.header}>
            <img src={fatec} className={styles.fatec_image} />
            <p className={styles.central_text}>Teste Vestibular</p>
            <img src={userImage} className={styles.user_image} />
        </div>
    )
}

export default Header