import UIstyle from "../UI/button.module.css"
import { useNavigate } from 'react-router-dom';
const ButtonBlack = ({text,route}) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${route}`);
    };

    return (
        <button type="button" className={UIstyle.ButtonBlack} onClick={handleClick}>{text}</button>
    )
} 

export default ButtonBlack