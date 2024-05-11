import { Link } from "react-router-dom"
import "./Post.css"
import MainButton from "components/main_button"

const Post = (props) => {
    return(
        <Link to={`/posts/${props.post.id}`}>
            <div className="postC">
                <img className="capePosts" src={`/assets/posts/${props.post.id}/capa.png`} alt="post"></img>
                <h2 className="titlePosts">{props.post.titulo}</h2>
                <MainButton>Read</MainButton>
            </div>
        </Link>
    )
}

export default Post