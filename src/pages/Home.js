import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Style/Home.css';
import profile from '../images/PROFILE.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';



function Home() {
    return(
        <Container id="home">
            <Row lg={2} xs={1}>
                <Col lg={7} className="order-2 order-lg-1 pt-4 pt-lg-2">
                    <Container className="pt-lg-5 mt-lg-5 con">
                        <Row className=" h-100 mt-lg-5  first-col">
                            <Col className="border-end home-title border-black cols">
                                <p className="fs-3 poppins-semibold">STUDENT</p>
                            </Col>
                            <Col className="border-end home-title border-black text-center cols">
                                <p className="fs-3 text-lg-center poppins-semibold">DAUGHTER</p>
                            </Col>
                            <Col className="text-center cols">
                                <p className="fs-3 text-lg-end poppins-semibold">DREAMER</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="second-col">
                                <p className="text-1 text-justify disc">
                                    A 22-year-old BS in <b>Information Technology </b><br/> at Central Philippines State University - Main Campus
                                </p>
                            </Col>
                        </Row>
                        <Row className="my-4 w-100">
                            <Col className="w-100">
                                <Link as={NavLink} to='/about' className='btn btn-outline-dark fw-bold w-100 active'> About Me </Link>
                            </Col>
                            <Col className="w-100">
                                <Link as={NavLink} to='/experience' className='btn btn-outline-dark fw-bold w-100'>My Experiences </Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={5} className="pt-lg-5 order-1 order-lg-2">
                    <Container>
                        <Row>
                            <Col>
                                <Card  className="shadow mt-lg-5">
                                    <Card.Img src={profile} className="shadow" alt="Heart Marianne" />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <p className="fs-10 text-600 poppins-extrabold border-bottom">Recent Projects</p>
                </Col>
            </Row>
            <Row xs={1} lg={2} className="gap-3 m-3">
                <Col className="m-auto w-100">
                    <Card className="bg-dark text-white overflow-hidden">
                        <Card.Body>
                            <Card.Title className="fs-7 fw-bold">
                            IT-CENTRAL
                            </Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" src={project3} className="img-fluid w-lg-50 w-75 ms-lg-auto me-lg-5 pe-lg-5 m-auto zoom-hover"/>
                    </Card>
                </Col>
            </Row>
            <Row className="gap-lg-3 m-3">
                <Col className="m-auto w-100">
                    <Card className="bg-dark text-white overflow-hidden h-100">
                        <Card.Body>
                            <Card.Title className="fs-7 fw-bold">
                            CPSU-WEBSITE
                            </Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" src={project2} className="img-fluid w-75 ms-lg-auto me-lg-5 pe-lg-5 m-auto py-lg-5 mobile-p zoom-hover"/>
                    </Card>
                </Col>
                <Col className="m-auto w-100 ">
                    <Card className="bg-dark text-white overflow-hidden h-100">
                        <Card.Body>
                            <Card.Title className="fs-7 fw-bold">
                            NAIL POLISH WEB-STORE
                            </Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" src={project1} className="img-fluid w-75 ms-lg-auto me-lg-5 pe-lg-5 m-auto py-lg-5  zoom-hover"/>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}
export default Home;