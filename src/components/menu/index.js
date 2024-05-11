import { Link, useLocation } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    const location = useLocation();
    return(
        <header>
            <nav className="navigation">
                <Link className={location.pathname === '/' ? "linkHighlighted" : "link"} to="/">
                    Home
                </Link>
                <Link className={location.pathname === '/about' ? "linkHighlighted" : "link"} to="/about">
                    About Me
                </Link>
            </nav>
        </header>
    )
}

export default Menu;