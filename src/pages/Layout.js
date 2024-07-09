import { Outlet } from "react-router-dom";
import {Nav} from 'react-bootstrap';
import './Style/Font.css';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function Layout() {
    return(
        <Nav>
            <Header />
                <Outlet />
            <Footer />
        </Nav>
    );
}
export default Layout;