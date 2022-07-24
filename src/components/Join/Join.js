import { Link } from 'react-router-dom'
import './Join.css'

function Join()
{

    return(
        <div className="JoinContainer">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>Join <br /> our network</h1>
                    </div>
                    <div className="col-4 JoinLinksContainer">
                        <Link to="/Join/SignUp" className='btn btnJoin my-3'>SIGN UP</Link>
                        <Link to="/Join/Network" className='btn btnJoin my-3'>NETWORK</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Join