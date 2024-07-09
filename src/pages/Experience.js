import { Container, Row, Col, Card } from "react-bootstrap";
import './Style/Experience.css';
// import profile from '../images/_7f26424e-78d0-434c-ac1a-5bc27fb3992a.jpg';
import profile from '../images/OJT 1.jpg';
import profile1 from '../images/OJT 2.jpg';
import profile2 from '../images/OJT 3.jpg';


function Experience() {
    return(
        <Container id="Experience">
            <Row>
                <Col>
                    <p className="fs-10 text-600 poppins-extrabold border-bottom">Experience</p>
                </Col>
            </Row>
            <Row>
                <Col  className="mt-lg-5 cols">
                    <Card className="p-lg-3 m-auto border-0 shadow card-content position-relative">
                        <p className="fs-2 poppins-semibold lh-0">Graduation</p>
                        <p className="fs-5">Central Philippines State University Main Campus </p>
                        <p className="fs-5">Bachelor's Degree in Information Technology </p>
                        <p className="position-absolute top-0 end-0 fs-3 fw-bolder text-secondary me-3">2024</p>
                    </Card>
                    <hr className="border-0" />
                    <Card className="rounded-0 border-0 border-end border-5 w-50 p-4">
                    </Card>
                    <Card className="p-lg-3 m-auto text-justify border-0 shadow card-content mt-4 position-relative">
                        <p className="fs-2 poppins-semibold lh-0">Internship</p>
                        <p className="fs-5 text-justify">DPWH Kabankalan</p>
                        <p className="fs-5 text-justify">
                            Filing various documents, encoding some important data, troubleshooting, configure of new Pcs' or Desktop and server discussion of DPWH server.
                        </p>
                        <p className="position-absolute top-0 end-0 fs-3 fw-bolder text-secondary me-3">2023</p>
                    </Card>
                    <hr className="border-0" />
                    <Card className="rounded-0 border-0 w-50 mt-5">
                    </Card>
                    <p className="fs-2 poppins-semibold ms-5">Internship Photos</p>
                    <Row xs={1} className="g-4 row-cols-3 mb-5">
                        <Col className="mb-5">
                            <Card>
                                <Card.Img variant="top" className="intern-photos" src={profile} />
                                <Card.Body>
                                <Card.Title className="text-center">Encoding</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-5">
                            <Card>
                                <Card.Img variant="top" className="intern-photos" src={profile2} />
                                <Card.Body>
                                <Card.Title className="text-center">Configuration</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-5">
                            <Card>
                                <Card.Img variant="top" className="intern-photos" src={profile1} />
                                <Card.Body>
                                <Card.Title className="text-center">Encoding</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    );
}
export default Experience;