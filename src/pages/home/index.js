import "./Home.css"
import posts from "assets/json/posts.json"
import Post from "components/posts"


const Home = () => {
    return(
        <ul className="posts">
            {posts.map((post) =>{
                return(
                <li key={posts.id}>
                    <Post post={post}></Post>
                </li>
                )
            })}
        </ul>
    );
}

export default Home;