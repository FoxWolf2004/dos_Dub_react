import UIstyle from "../UI/button.module.css"
import { useNavigate } from 'react-router-dom';

const ButtonBlue = ({text, route}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${route}`);
    };

    return (    
        <button type="button" className={UIstyle.ButtonBlue} onClick={handleLink}>{text}</button>
    )
} 