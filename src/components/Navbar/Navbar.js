import './Navbar.css'
import {

    BrowserRouter as Router,
    Routes,
    Route,
    Link

} from 'react-router-dom'

import Join from '../Join/Join'
import Main from '../Main/Main'

import SignUp from '../Join/SignUp/SignUp'
import Newtwork from '../Join/Newtwork/Newtwork'

function Navbar()
{
    return(
        <div>

            <Router>

                <div className='NavContainer'>

                    <Link to='/' className='NavLogo'>The Running Fox</Link>

                    <div className='LinksContainer'>
                        <Link to='/Join' className='btn btnLogin btn-dark my-3'>JOIN US</Link>
                    </div>

                </div>

                <Routes>

                    <Route path='/' element={<Main />}></Route>
                    <Route path='/Join' element={<Join />}></Route>
                    <Route path='/Join/Newtwork' element={<Newtwork />}></Route>
                    <Route path='/Join/SignUp' element={<SignUp />}></Route>

                </Routes>
            </Router>

        </div>
    )
}

export default Navbar