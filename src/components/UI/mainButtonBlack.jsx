import UIstyle from "../UI/button.module.css"
const ButtonBlack = ({text}) => {
    return (
        <button type="button" className={UIstyle.ButtonBlack}>{text}</button>
    )
} 

export default ButtonBlack