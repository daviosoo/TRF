import Banner from './Banner/Banner'
import About from './About/About'
import Solutions from './Solutions/Solutions'
import Footer from '../Footer/Footer'
import Contact from './Contact/Contact'

function Main() 
{
    return(
        <div>
            <Banner BannerText="Our mission is to design software to make work life simpler" />
            <About />
            <Solutions />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main