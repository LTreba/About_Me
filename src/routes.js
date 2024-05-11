import AboutMe from "./pages/about_me";
import Home from "./pages/home";
import Menu from "./components/menu"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Footer from "components/Footer";
import Standart from "components/standart_page";
import PostPage from "pages/post_page";
import NotFound from "pages/not_found";

//SPA (SINGLE PAGE APPLICATION)
function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Standart></Standart>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<AboutMe></AboutMe>}></Route>
        </Route>
        <Route path="posts/:id" element={<PostPage></PostPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>

  )
}

export default AppRoutes;
