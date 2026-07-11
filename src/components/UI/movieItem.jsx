import { useNavigate } from "react-router";
import style from './movieitem.module.css'
const Movieitem = ({img,name,link}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${link}`);
    };

    
    return(
        <>


            <img src={`../public/posters/${img}.png`} alt="постер тайтла или постановки" onClick={handleClick} className={style.movieItem} />


        </>
    )
}

export default Movieitem