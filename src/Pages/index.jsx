import Header from '../components/Header'
import Footer from '../components/footer'
import "../app.css"
import HeaderText from '../components/UI/HeaderText'
import Newbe from './indexComponents/movieitems'
import Hero from './indexComponents/hero'


const Index = () => {
    return(
        <>
        <main>
            <div className='wrapper'>

                    <Hero></Hero>
                    <div className='movieNew'>
                        <HeaderText text={"Новинки"}/>
                        <Newbe></Newbe>
                    </div>


            </div>

        </main>


        </>
    )
}

export default Index