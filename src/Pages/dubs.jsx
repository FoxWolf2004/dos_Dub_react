import Header from '../components/Header'
import Footer from '../components/footer'
import "../app.css"
import HeaderText from '../components/UI/HeaderText'

import Movieitems from './dubsComponents/movieitems'
const Dubs = () => {
    return(
        <>

        <main>
            <div className='wrapper'>
                <HeaderText text={"Озвучки"}></HeaderText>

                <Movieitems></Movieitems>

            </div>
        </main>
        
        </>
    )
}

export default Dubs