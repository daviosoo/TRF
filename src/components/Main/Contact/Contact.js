import './Contact.css'

import { useForm } from "react-hook-form";
import { useState, useRef } from "react"

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact()
{
    const form = useRef();

    const[ mail, setMail ] = useState({
        name:'',
        email: '',
        message: ''
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const sendEmail = () => {

        emailjs.sendForm('TRF', 'template_trf', form.current, 'uKLtZMpAXnbzbe4Qz')
            .then((result) => {
                notifySucces()
                reset()
            }, (error) => {
                notifyError()
            })
    }

    const notifySucces = () => {
        toast.success('Message sent successfully', {
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

    const notifyError = () => toast.error('Error sending the message', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    }) 

    const validateMail = () => {

        const available = mail.name !== '' && mail.email !== '' && mail.message !== ''

        console.log(mail)

        if (available) return true
        if (!available) return false

    }

    const onSubmit = () => validateMail() ? sendEmail() : false;

    return(
        <div className="my-5 row justify-content-center">

            <div className="col-5 text-start border p-5 ms-5 my-5">
                <h1 className='mb-5 formTitle'>Contact us</h1>

                <form className='form' ref={form} onSubmit={ handleSubmit(onSubmit) }>
                    <div className="mb-4">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control form-control-lg inputForm" name='name' {...register('name', { required: true, minLength: 4, onChange: (e) => { setMail({ ...mail, name: e.target.value }) } })}/>
                        <div className='text-center'>
                            {errors.name && (<span className='validationSpan'>This field is required <br /> </span>)}
                            {errors.name && (<span className='validationSpan'>More than 4 char</span>)}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control form-control-lg inputForm" name='email' {...register('email', { required: true, minLength: 4, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, onChange: (e) => { setMail({ ...mail, email: e.target.value }) } })}/>
                        <div className='text-center'>
                            {errors.email && (<span className='validationSpan'>This field is required <br /> </span>)}
                            {errors.email && (<span className='validationSpan'>Invalid email <br /> </span>)}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label ">Message</label>
                        <textarea className="form-control inputForm" rows="3" name='message' {...register('message', { required: true, minLength: 4, onChange: (e) => { setMail({ ...mail, message: e.target.value }) } })}></textarea>
                        <div className='text-center'>
                            {errors.email && (<span className='validationSpan'>This field is required <br /> </span>)}
                            {errors.email && (<span className='validationSpan'>Invalid email <br /> </span>)}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 btn-lg" id='btnSend'>SEND</button>
                </form>
            </div>

            <div className="col-3 my-5 px-5 text-start infoContainer">

                <h6 className='subTitle'>HEADQUATERS</h6>
                <p className='textInfo'>Emperatriz 604 C, Centrika Victoria <br /> Monterrey, Nuevo León <br /> México <br /> CP 64520 </p>

                <h6 className='subTitle'>EMAIL</h6>
                <p><a href="mailto:hello@therunningfox">hello@therunningfox</a></p>
                

                <h6 className='subTitle'>PHONE</h6>
                <p className='textInfo'>+52 811 628 8763</p>


            </div>

            <ToastContainer />
        </div>
    )

}

export default Contact