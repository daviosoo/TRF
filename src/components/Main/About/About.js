import './About.css'
import AboutIMG from './../../../Shared/img/AboutIMG.jpeg'

function About()
{
    return(
        <div className="AboutContainer container">

            <div className="row align-items-center justify-content-center">
                
                <div className="col-5">

                    <div className="row mb-3">
                        <div className="col-12">

                            <h3>We are</h3>
                            <p>
                                helping businesses simplify and automate their approach to the essential processes such as invoicing, contracts, reports and documents creation and sharing.
                            </p>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <h3>We offer</h3>
                            <p>
                                online solutions that reduce busywork so you can focus on the work that matters and grow your business.
                            </p>

                        </div>
                    </div>

                </div>

                <div className="col-6 ms-5">
                    <img src={ AboutIMG } className="AboutImg" alt='About Us'/>
                </div>

            </div>

        </div>
    )
}

export default About