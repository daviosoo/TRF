import './Solutions.css'
import SatPDFIMG from './../../../Shared/img/SatPDF IMG.png'
import PrexViewIMG from './../../../Shared/img/PrexView IMG.png'
import Soon from './../../../Shared/img/Lets talk IMG.webp'

function Solutions()
{
    return(
        <div className='SolutionsContainer'>

            <h1>Solutions rooted in code and design</h1>

            <div className='SolutionsServicesContainer'>

                <a href='https://satpdf.com' target="_blank" rel='noreferrer'> 
                    
                    <img src={ SatPDFIMG } alt='SATPDF'/>
                    Generate PDF and reports from electronic invoices in Mexico
                
                </a>

                <a href='https://prexview.com' target="_blank" rel='noreferrer'> 
                    
                    <img src={ PrexViewIMG } alt='PrexView'/>
                    Programmatically create high-quality PDF documents from JSON or XML
                
                </a>

                <a href='mailto:daviosood@gmail.com' target="_blank" rel='noreferrer'> 
                    
                    <img src={ Soon } alt='PrexView'/>
                    Let's talk about the next project...
                
                </a>

            </div>
           
        </div>
    )
}

export default Solutions