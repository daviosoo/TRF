import './Navbar.css'
import {

    BrowserRouter as Router,
    Routes,
    Route,
    Link

} from 'react-router-dom'

import Login from '../Login/Login'
import Main from '../Main/Main'

function Navbar()
{
    return(
        <div>

            <Router>

                <div className='NavContainer'>

                    <Link to='/' className='NavLogo'>The Running Fox</Link>

                    <div className='LinksContainer'>
                        <Link to='/Login' className='btn btnLogin btn-dark my-3'>LOG IN</Link>
                    </div>

                </div>

                <Routes>

                    <Route path='/' element={<Main />}></Route>
                    <Route exact path='/Login' element={<Login />}></Route>

                </Routes>
            </Router>

        </div>
    )
}

export default Navbar