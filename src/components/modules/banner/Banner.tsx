import { BannerImg } from "./BannerImg"
import { BannerInfo } from "./BannerInfo"

export const Banner = ()=> {
    return (
        <div className="banner">
            <BannerImg />
            <BannerInfo />
        </div>
    )
}