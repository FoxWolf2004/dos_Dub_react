import Movieitem from "../../components/UI/movieItem"
import Styles from "./movieitems.module.css"
const Newbe = () => {
    return(
        <>
            <div className={Styles.newbe}>
                <Movieitem img={"BeastarsPoster"} name={"Beastars"} link={'/dubs'}></Movieitem>
                <Movieitem img={"BeastarsPoster"} name={"Beastars"} link={'/dubs'}></Movieitem>
                <Movieitem img={"BeastarsPoster"} name={"Beastars"} link={'/dubs'}></Movieitem>
                <Movieitem img={"BeastarsPoster"} name={"Beastars"} link={'/dubs'}></Movieitem>
            </div>
        </>
    )
}

export default Newbe