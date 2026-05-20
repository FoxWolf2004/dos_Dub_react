import styles from "./navigation.module.css"
import ButtonBlack from "../UI/mainButtonBlack"
const Navigation = () => {
    return(

        <nav>
            <div className={styles.buttons}>
                <ButtonBlack  text={"Озвучки"}></ButtonBlack>
                <ButtonBlack  text={"Постановки"}></ButtonBlack>
                <ButtonBlack  text={"Песни"}></ButtonBlack>
            </div>

        </nav>

    )
}

export default Navigation