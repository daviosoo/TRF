import './SignUp.css'
import Fox from '../../../Shared/img/BalcWolfIMG.png'

const handleSubmit = ( event ) => {
    
    alert('Works')
    event.preventDefault();

}

function SignUp()
{
    return(

        <div className="SignUpContainer container-fluid">

            <div className="row py-5 px-5 justify-content-evenly align-items-center">

                <div className="col-5">

                    <form onSubmit={handleSubmit}>
                        <h1 className="my-4">SIGN UP</h1>
                        <div class="row mb-3">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name"/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-at"></i></span>
                                <input type="text" class="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-user"></i></span>
                                    <input type="text" class="form-control" placeholder="Username" />
                                </div>
                            </div>
                            <div className='col'>
                                <select class="form-select">
                                    <option selected>Country</option>
                                    <option value="1">Colombia</option>
                                    <option value="2">United States</option>
                                    <option value="3">Mexico</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-lock"></i></span>
                                    <input type="password" class="form-control" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btnSignUp mt-3">Submit</button>
                    </form>

                </div>

                <div className='col-4'>
                    <img src={ Fox } alt='Fox' className='img-fluid'/>
                </div>

            </div>
            
        </div>

    )
}

export default SignUp