import styles from "./style.module.css"
import InitiateButton from "../../components/InitiateButtons/index";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <InitiateButton />
    </div>
   );
};
