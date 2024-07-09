
import { Container, Navbar } from "react-bootstrap";
import './components.css';

function Footer() {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary w-100 shadow-top-lg">
            <Container className="py-3">
                <Navbar.Brand>
                    <h5 className="poppins-bold fs-small-mobile m-0">Heart Marianne Rubio</h5>
                </Navbar.Brand>
                <Navbar.Brand>
                    <a href="https://web.facebook.com/treah.ennairam" target="_blank" rel="noreferrer"><i class="bi bi-facebook fs-3 mx-1"></i></a>
                    <a href="https://github.com/heartmarianne" target="_blank" rel="noreferrer"><i class="bi bi-github text-black fs-3 mx-1"></i></a>
                    <a href="https://www.instagram.com/miss_heart4?igsh=cGQwMHA5MGpvY3Ex" target="_blank" rel="noreferrer"><i class="bi bi-instagram text-magenta fs-3 mx-1"></i></a>
                    <a href="https://www.tiktok.com/@binibining_heart4?_r=1&_d=dk69i6i79a536h&sec_uid=MS4wLjABAAAAPWF00LdHIZyfP0QGL3chlZGQKSB_4N1q7d5coJh8Nw1M9b5NF3ksSH1qV0tz9AwJ&share_author_id=6825559242361439233&sharer_language=en&source=h5_t&u_code=dcae1emj6ameg8&timestamp=1719654297&user_id=6825559242361439233&sec_user_id=MS4wLjABAAAAPWF00LdHIZyfP0QGL3chlZGQKSB_4N1q7d5coJh8Nw1M9b5NF3ksSH1qV0tz9AwJ&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7358622978244953862&share_link_id=19112c8d-a978-43bc-a9da-52fdf7b41b24&share_app_id=1180&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&enable_checksum=1
" target="_blank" rel="noreferrer"><i class="bi bi-tiktok text-black fs-3 mx-1"></i></a>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Footer;
