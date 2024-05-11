import Title from "components/Title";
import photoCape from "assets/about_me_img.png"
import "./AboutMe.css"
import photoAboutMe from "assets/my_photo_bgd.png"



const AboutMe = () => {
    return(
        <Title photoCape={photoCape} title="About me">
            <h3 className="subtitle">Hello, I'm ...</h3>
            <img src={photoAboutMe} alt="Person photo" className="photoAboutMeImg"></img>
            <p className="paragraph">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
        </Title>
    )
}

export default AboutMe;