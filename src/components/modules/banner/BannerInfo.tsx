const info = "If you need a resume in pdf format"
const info0 = "it can be downloaded by clicking the button"

 

export const BannerInfo = () => {
    return(
        <div className="banner-info">
            <p className="content-banner">Hello !</p>
            <p className="content-banner">{info}</p>
            <p className="content-banner">{info0}</p>
            <button className="button">download</button>
        </div>
    )
    }