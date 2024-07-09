/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col, Card } from "react-bootstrap";
import './Style/Contact.css';

function Contact() {
    return(
        <Container id="contact">
        <Row>
            <Col>
                <p className="fs-10 text-600 poppins-extrabold border-bottom">Contact</p>
            </Col>
        </Row>
            <Row>
                <Col  className="py-5">
                    <Card className="p-3 m-auto text-justify border-0 shadow">
                        <p className="fs-lg-5 poppins-semibold">I'm always open to new opportunities and connections. Feel free to reach out to me through any of the following methods:</p> <br/>
                        <ul>
                            <li> 
                                <p className="fs-lg-4 poppins-medium">Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer">hrtrubio@gmail.com</a></p>
                            </li>
                            <li> 
                                <p className="fs-lg-4 poppins-medium">Github: <a href="#" target="_blank">heartmarianne.github.io</a></p>
                            </li>
                            <li> 
                                <p className="fs-lg-4 poppins-medium">Contact #: +63963585402</p>
                            </li>
                            <li> 
                                <p className="fs-lg-4 poppins-medium">Facebook: <a href="https://web.facebook.com/treah.ennairam" target="_blank" rel="noreferrer">Heart Marianne</a></p>
                            </li>
                        </ul>
                        <p className="fs-lg-5 poppins-semibold">I look forward to connecting with you!</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Contact;