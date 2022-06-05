import './Banner.css'
function Banner({ BannerText })
{
    return(
        <div className="BannerContainer">
            <div className='BannerTextContainer'>
                <h1 className='BannerText'>{BannerText}</h1>
            </div>
        </div>
    )
}

export default Banner