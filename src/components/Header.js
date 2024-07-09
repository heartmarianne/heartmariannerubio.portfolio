import { Link, NavLink, useLocation } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import './components.css';

function Header() {
    
    const page = useLocation();
    const activePath = page.pathname;
    return (
        <Navbar expand="lg" className="bg-body-tertiary w-100 mb-5 shadow">
            <Container className="py-3">
                <Navbar.Brand href="/">
                    <h5 className="poppins-bold m-0">Heart Marianne Rubio</h5>
                    <p className="m-0 poppins-extralight fs-6">BS in Information Technology</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-item gap-5">
                        <Link as={NavLink} className="poppins-medium text-black" to='/about' activeClassName="active-link">About {activePath === '/about' && <i className="bi bi-arrow-down m-0 p-0"></i>}</Link>
                        <Link as={NavLink} className="poppins-medium text-black" to='/project' activeClassName="active-link">Project {activePath === '/project' && <i className="bi bi-arrow-down m-0 p-0"></i>}</Link>
                        <Link as={NavLink} className="poppins-medium text-black" to='/experience' activeClassName="active-link">Experience {activePath === '/experience' && <i className="bi bi-arrow-down m-0 p-0"></i>}</Link>
                        <Link as={NavLink} className="poppins-medium text-black" to='/contact' activeClassName="active-link">Contact {activePath === '/contact' && <i className="bi bi-arrow-down m-0 p-0"></i>}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
