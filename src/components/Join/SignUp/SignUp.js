import './SignUp.css'
import Fox from '../../../Shared/img/BalcWolfIMG.png'

import { useForm } from "react-hook-form";
import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp()
{
    const [ user , setUser] = useState({
        username: '',
        name: '',
        surname: '',
        email: '',
        country: '',
        password: '',
    })

    const validateUser = () => {

        const available = user.username !== '' && user.name !== '' && user.surname !== '' && user.email !== '' && user.password !== '' 
        
        if (available) return true
        if (!available) return false
        
    }

    const { register, handleSubmit, reset ,formState: { errors } } = useForm()

    const onSubmit = () => validateUser() ? insertUser() : false

    const notifySucces = () => {
        toast.success('User created successfully', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
        reset()
    }

    const notifyError = () => toast.warning('Existing user', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }) 

    const insertUser = () => {

        const uri = 'https://trfapi.000webhostapp.com/insertUser.php'

        const params = {

            method: 'POST',
            body: JSON.stringify({
                username: user.username,
                name: user.name,
                surname: user.surname,
                email: user.email,
                country: user.country ? user.country : "Colombia",
                password: user.password
            }),
        }

        fetch(uri, params)
            .then((res) => res.json())
            .then((data) => data === 'Usuario creado correctamente' ? notifySucces() : notifyError())
            .catch((err) => console.log(err))

    }

    return(

        <div className="SignUpContainer container-fluid">

            <div className="row py-5 px-5 justify-content-evenly align-items-center">

                <div className="col-5">
                    <form onSubmit={ handleSubmit( onSubmit ) }>
                        <h1 className="my-4">SIGN UP</h1>
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" name='name' {...register('name', { required: true, minLength: 4, onChange: (e) => { setUser({ ...user, name: e.target.value})} })}/>
                                {errors.name && (<span className='validationSpan'>This field is required <br /> </span>)}
                                {errors.name && (<span className='validationSpan'>More than 4 char</span>)}
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" name='surname' {...register('surname', { required: true, minLength: 4, onChange: (e) => setUser({ ...user, surname: e.target.value }) })}/>
                                {errors.surname && (<span className='validationSpan'>This field is required <br /> </span>)}
                                {errors.surname && (<span className='validationSpan'>More than 4 char</span>)}
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div>
                                <div className='input-group flex-nowrap'>
                                    <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-at"></i></span>
                                    <input type="text" className="form-control" placeholder="Email" name='email' {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, onChange: (e) => setUser({ ...user, email: e.target.value }) })}/>
                                </div>
                                <div className='row justify-content-center align-items-center'>
                                    <div className='col-12'>
                                        {errors.email && (<span className='validationSpan'>This field is required <br /> </span>)}
                                        {errors.email && (<span className='validationSpan'>Invalid field <br /> </span>)}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <div>
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-user"></i></span>
                                        <input type="text" className="form-control" placeholder="Username" name='username' {...register('username', { required: true, minLength: 6, onChange: (e) => setUser({ ...user, username: e.target.value }) })}/>
                                    </div>
                                    <div className='row justify-content-center align-items-center'>
                                        <div className='col-12'>
                                            {errors.username && (<span className='validationSpan'>This field is required <br /> </span>)}
                                            {errors.username && (<span className='validationSpan'>More than 6 char <br /> </span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <select className="form-select" name='country' {...register('country', { onChange: (e) => setUser({...user, country: e.target.value })})}>
                                    <option defaultValue="1">Colombia</option>
                                    <option value="2">United States</option>
                                    <option value="3">Mexico</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <div>
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock"></i></span>
                                        <input type="password" className="form-control" placeholder="Password" name='password' {...register('password', { required: true, minLength: 8, onChange: (e) => setUser({...user, password: e.target.value }) })}/>
                                    </div>
                                </div>
                                <div className='row justify-content-center align-items-center'>
                                    <div className='col-12'>
                                        {errors.password && (<span className='validationSpan'>This field is required <br /> </span>)}
                                        {errors.password && (<span className='validationSpan'>More than 8 char <br /> </span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btnSignUp mt-3">Submit</button>
                    </form>

                </div>

                <div className='col-4'>
                    <img src={ Fox } alt='Fox' className='img-fluid'/>
                </div>

            </div>

            <ToastContainer />
        </div>

    )
}

export default SignUp