import Banner from "components/banner";
import "./Standart.css"
import { Outlet } from "react-router-dom";

const Standart = () => {
    return(
        <main>
            <Banner>

            </Banner>
            <Outlet/>
        </main>
    )
}

export default Standart;