import style from './hero.module.css'
const Hero = () => {
    return(
        <div className={Style.Hero}>
            <img src="src\assets\dos dub\logo.png" alt="dosDub logo" />
            <div className={style.HeroText}>
                <h1>DosDub</h1>
                <p>Любительская озвучка да и рофлы)</p>
            </div>
        </div>
    )
}

export default Hero