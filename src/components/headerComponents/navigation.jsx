import styles from "./navigation.module.css"
import ButtonBlack from "../UI/mainButtonBlack"
const Navigation = () => {
    return(

        <nav>
            <div className={styles.buttons}>
                <ButtonBlack  text={"Озвучки"} route="/dubs"></ButtonBlack>
                <ButtonBlack  text={"Постановки"} route="/productions"></ButtonBlack>
                <ButtonBlack  text={"Песни"} route="/music"></ButtonBlack>
                
            </div>

        </nav>

    )
}

export default Navigation