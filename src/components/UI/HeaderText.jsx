import UIstyle from "../UI/Header.module.css"
const HeaderText = ({text}) => {
    return(
        <div className={UIstyle.HeaderText}>
            <h2>{text}</h2>
        </div>  
    )
}

export default HeaderText