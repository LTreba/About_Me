import MainButton from "components/main_button"
import "./NotFound.css"
import error404 from "assets/erro_404.png"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate()

    return(
        <>
            <div className="contentContainerNotFound">
                <span className="text404"></span>
                <h1 className="titleNotFound">Page not Found!</h1>
                <p className="paragraphNotFound">Are u sure that's what you've been looking for?</p>
                <div className="buttonContainerNotFound" onClick={() => {navigate(-1)}}>
                    <MainButton>Voltar</MainButton>
                </div>
                <img className="imgDog" src={error404} alt="Dog as human"></img>
            </div>
            <div className="blankSpace"></div>
        </>
    )
}

export default NotFound