import "./Banner.css"
import circle from "assets/circle.png"
import myPhoto from "assets/my_photo.png"

const Banner = () => {
    return(
        <div className="banner">
            <div className="apresentacao">
                <h1 className="title">Hello, World</h1>
                <p className="paragraph">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
            <div className="images">
                <img className="circle" src={circle} alt="Background person"></img>
                <img className="myPhoto" src={myPhoto} alt="Profile Picture"></img>
            </div>
        </div>
    )
}

export default Banner;