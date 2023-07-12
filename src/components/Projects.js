import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "My First Website",
      description: <><div><a class="hyper" href="https://github.com/VathanSilva/myfirstwebsite">Github</a></div><div><a class="hyper" href="https://francissilva.vercel.app/">Website</a></div></>,
      imgUrl: projImg4,
    },
    {
      title: "My Web Project Details Website",
      description: <><div><a class="hyper" href="https://github.com/VathanSilva/Francis-Webproject">Github</a></div><div><a class="hyper" href="https://francis-webproject.vercel.app/">Website</a></div></>,
      imgUrl: projImg8,
    },
    {
      title: "My Weather Forecast Website",
      description: <><div><a class="hyper" href="https://github.com/VathanSilva/francis-weather">Github</a></div><div><a class="hyper" href="https://francis-weather.vercel.app/">Website</a></div></>,
      imgUrl: projImg7,
    },
    {
      title: "My Movie CRUD Admin Website",
      description: <><div><a class="hyper" href="https://github.com/VathanSilva/movie-crud">Github</a></div><div><a class="hyper" href="https://movie-crud-weld.vercel.app/">Website</a></div></>,
      imgUrl: projImg9,
    },
    {
      title: "My Movie CRUD API",
      description: <><div><a class="hyper" href="https://github.com/VathanSilva/movie-crud-api">Github</a></div><div><a class="hyper" href="https://movie-crud-api.vercel.app/">Website</a></div></>,
      imgUrl: projImg10,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
  ];

  const projects1 = [
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
  ];

  const projects2 = [
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon!",
      description: "",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My App Projects and Website Projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
