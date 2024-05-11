import "./Title.css"

const Title = (props) => {
    return(
        <article className="postModelContainer">
            <div className="photoCape" style={{backgroundImage: `url(${props.photoCape})`}}></div>
            <h2 className="title">{props.title}</h2>
            <div className="postContentContainer">
                {props.children}
            </div>
        </article>
    )
}

export default Title