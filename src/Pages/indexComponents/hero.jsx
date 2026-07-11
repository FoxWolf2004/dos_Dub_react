
import styles from "./Hero.module.css"
const Hero = () => {
    return(
        <div className={styles.Hero}>

            <img src="src\assets\dos dub\logo.png" alt="" />

            <div className={styles.herotext}>
                <h1>DosDub</h1>
                <p>Конструктивные озвучкеры</p>
            </div>


        </div>
    )
}

export default Hero