import { Route, useParams } from "react-router-dom"
import "./PostPage.css"
import posts from "assets/json/posts.json"
import Title from "components/Title"
import ReactMarkDown from "react-markdown"
import NotFound from "pages/not_found"
import {Routes} from "react-router-dom"
import Standart from "components/standart_page"

const PostPage = () => {

    const parameters = useParams()

    const post = posts.find((post) => {
        return(post.id === Number(parameters.id))
    })

    if(!post){
        return(<NotFound></NotFound>)
    }

    return(
        <Routes>
            <Route path="*" element={<Standart></Standart>}>
                <Route index element={
                    <Title photoCape={`/assets/posts/${post.id}/capa.png`} title={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkDown>{post.texto}</ReactMarkDown>
                        </div>
                    </Title>
                }>

                </Route>
            </Route>
        </Routes>
    )
}

export default PostPage