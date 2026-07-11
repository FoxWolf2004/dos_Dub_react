import "./header.css"
import ButtonBlack from "./UI/mainButtonBlack"

import Navigation from "./headerComponents/navigation"
import { useNavigate } from 'react-router-dom';


const Header = () => {
        
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };

    return(
        <header>
            <div className="wrapper">
                <div className="logo">
                    <div className="imgCenter">
                        <img src="src\assets\dos dub\logo.png" alt="Logo DosDub" onClick={handleClick}/>
                    </div>
                </div>

                <Navigation/>
            </div>
        </header>
    )
}

export default Header