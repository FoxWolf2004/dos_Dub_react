import "./header.css"
import ButtonBlack from "./UI/mainButtonBlack"

import Navigation from "./headerComponents/navigation"
const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <div className="logo">
                    <div className="imgCenter">
                        <img src="src\assets\dos dub\logo.png" alt="Logo DosDub" />
                    </div>
                </div>

                <Navigation/>
            </div>
        </header>
    )
}

export default Header