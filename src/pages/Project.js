import { Container, Row, Col, Card } from "react-bootstrap";
import './Style/Project.css';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

function Project() {
    return(
        <Container id="Project">
            <Row>
                <Col>
                    <p className="fs-10 text-600 poppins-extrabold border-bottom">Projects</p>
                </Col>
            </Row>
            <Row xs={1} lg={2} className="gap-3 m-3">
                <Col className="m-auto w-100">
                    <Card className="bg-dark text-white overflow-hidden">
                        <Card.Body>
                            <Card.Title className="fs-1 fw-bold">
                            IT-CENTRAL
                            </Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" src={project3} className="img-fluid w-50 ms-auto me-5 pe-5  zoom-hover"/>
                    </Card>
                </Col>
                <Col className="m-auto w-100">
                    <Card className="bg-dark text-white overflow-hidden">
                        <Card.Body>
                            <Card.Title className="fs-1 fw-bold">
                            CPSU-WEB
                            </Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" src={project2} className="img-fluid w-50 ms-auto me-5 pe-5  zoom-hover"/>
                    </Card>
                </Col>
                <Col className="m-auto w-100">
                    <Card className="bg-dark text-white overflow-hidden">
                        <Card.Body>
                            <Card.Title className="fs-1 fw-bold">
                            NAIL POLISH WEB-STORE
                            </Card.Title>
                        </Card.Body>
                        <Card.Img variant="bottom" src={project1} className="img-fluid w-50 ms-auto me-5 pe-5  zoom-hover"/>
                    </Card>
                </Col>
                <Col className="m-auto w-100">
                    <Card className="bg-dark text-white overflow-hidden">
                        <Card.Body>
                            <Card.Title className="fs-1 fw-bold text-center">
                            Others on progress...
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}
export default Project;