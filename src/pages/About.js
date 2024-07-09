import { Container, Row, Col, Card, Image } from "react-bootstrap";
import './Style/About.css';
import stack1 from '../images/html5.png';
import stack2 from '../images/css.png';
import stack3 from '../images/avatar.png';
import stack4 from '../images/react.png';
import stack5 from '../images/js.png';
import stack6 from '../images/bootstrap.png';
import stack7 from '../images/canva.png';
import stack8 from '../images/excel.png';
import stack9 from '../images/ppt.png';
import stack10 from '../images/word.png';



function About() {
    return(
        <Container id="about">
            <Row>
                <Col>
                    <p className="fs-10 text-600 poppins-extrabold border-bottom">About</p>
                </Col>
            </Row>
            <Row lg={2} xs={1} className="my-lg-3">
                <Col className="col-lg-4 col-12">
                    <Row lg={1}>
                        <Col className="col-12">
                            <Card className="p-2 m-auto text-justify border-0 shadow">
                                <p  className="fw-bold">Contact</p>
                                <p  className="">For any questions or inquiries, please feel free to get in touch with me through the following channels: <br/>
                                        <b>Email: </b>hrtrubio@gmail.com <br/>
                                        <b>Phone: </b> +63 963 585 5402</p>
                            </Card>
                         </Col>
                         <Col>
                            <Card className="p-2 m-auto text-justify border-0 shadow my-5">
                                <p className="fw-bold">Technology Stack</p>
                                <Row xs={3} className="g-2">
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack1} />
                                        </Card>
                                    </Col>
                                    <Col>
                                    <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack2} />
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack4} />
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack5} />
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack6} />
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack7} />
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack8} />
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack9} />
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='border-0 shadow'>
                                            <Image variant="top" className="stack-photos img-fluid m-auto" src={stack10} />
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-lg-8">
                    <Card className="col p-2 m-auto text-justify border-0 shadow">
                    Hello! I'm Heart Marianne Rubio, a 22-year-old fourth-year BS Information Technology student at Central Philippines State University - Main Campus.
                    My journey in the tech world has led me to specialize as a front-end developer, where I enjoy bringing designs to life through code. <br/>  <br/> 
                    Beyond my academic pursuits, I have a diverse set of interests and talents. I am passionate about cooking, creating delicious meals that bring joy to those around me. 
                    I also express myself through spoken poetry and even composed a song during my high school years.  <br/>  <br/> 
                    In my first and second years of college, I had the valuable experience of working as an assistant to a City Engineer. This role involved handling various tasks,
                    including preparing paperwork and assisting with city projects related to highways, drainage systems, and housing developments. This opportunity not only honed
                     my organizational skills but also gave me a glimpse into the real-world applications of my studies. <br/>  <br/> 
                    I am continually seeking opportunities to grow and apply my skills in front-end development. Through my portfolio, I aim to showcase my work, connect with like-minded professionals, 
                     and explore new challenges that push the boundaries of my creativity and technical expertise.


                     <p className="fw-bold mt-5">
                        Recommendation
                     </p>
                        <Card className="w-100 shadow">
                            <Row>
                                <Col className="p-0 col-3 col-lg-2">
                                    <Image src={stack3} className="w-75 m-3" />
                                </Col>
                                <Col>
                                    <p className="mt-lg-4 mt-4 p-neutral">
                                       <b>Maritess L. Dacumos</b> <br/>
                                       DPWH Admin Officer IV/HRMO II
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Heart is very reliable and resourceful. She can grasp instructions and dedicated to given tasks. She is smart and knows how to deal with employees and others.</p>
                                </Col>
                            </Row>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default About;