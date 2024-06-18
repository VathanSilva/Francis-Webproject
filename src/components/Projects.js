import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.jpg";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.jpg";
import projImg17 from "../assets/img/project-img17.jpg";
import projImg18 from "../assets/img/project-img18.jpg";
import projImg19 from "../assets/img/project-img19.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "My First Website",
      description: (
        <>
          <div>
            <a
              class="hyper"
              href="https://github.com/VathanSilva/myfirstwebsite"
            >
              Github
            </a>
          </div>
          <div>
            <a class="hyper" href="https://francissilva.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg4,
    },
    {
      title: "My Web Project Details Website",
      description: (
        <>
          <div>
            <a
              class="hyper"
              href="https://github.com/VathanSilva/Francis-Webproject"
            >
              Github
            </a>
          </div>
          <div>
            <a class="hyper" href="https://francis-webproject.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg8,
    },
    {
      title: "My Weather Forecast Website",
      description: (
        <>
          <div>
            <a
              class="hyper"
              href="https://github.com/VathanSilva/francis-weather"
            >
              Github
            </a>
          </div>
          <div>
            <a class="hyper" href="https://francis-weather.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg7,
    },
    {
      title: "My Movie CRUD Admin Website",
      description: (
        <>
          <div>
            <a class="hyper" href="https://github.com/VathanSilva/movie-crud">
              Github
            </a>
          </div>
          <div>
            <a class="hyper" href="https://movie-crud-weld.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg9,
    },
    {
      title: "HTML Portfolio",
      description: (
        <>
          <div>
            <a
              class="hyper"
              href="https://github.com/VathanSilva/Francis-html-website"
            >
              Github
            </a>
          </div>
          <div>
            <a class="hyper" href="https://francis-html-website.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg13,
    },
    {
      title: "RR Decoration",
      description: (
        <>
          <div>
            <a class="hyper" href="https://github.com/VathanSilva/RRdecoration">
              Github
            </a>
          </div>
          <div>
            <a class="hyper" href="https://rrdecoration.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg11,
    },
    {
      title: "Is Abled Recruit",
      description: (
        <>
          <div>
            <a class="hyper" href="https://is-abled-recruit.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg17,
    },
    {
      title: "RayTech",
      description: (
        <>
          <div>
            <a class="hyper" href="https://ray-tech.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg18,
    },
    {
      title: "IFix Green Solutions (Pvt) Ltd",
      description: (
        <>
          <div>
            <a class="hyper" href="https://ifixgreen.vercel.app/">
              Website
            </a>
          </div>
        </>
      ),
      imgUrl: projImg19,
    },
  ];

  const projects1 = [
    {
      title: "Movie CRUD Back-End",
      description: <><div><a class="hyper" href="https://github.com/VathanSilva/movie-crud-api">Github</a></div><div><a class="hyper" href="https://movie-crud-api.vercel.app/">Website</a></div></>,
      imgUrl: projImg10,
    },
    {
      title: "Bus Booking System Back-End",
      description: <><div><a class="hyper" href="https://github.com/VathanSilva/bus-booking">Github</a></div><div><a class="hyper" href="https://bus-booking-rho.vercel.app/">Website</a></div></>,
      imgUrl: projImg14,
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
      title: "Space Travel App Figma Design For RootCode Company competition",
      description: (
        <div>
          <a
            class="hyper"
            href="https://github.com/VathanSilva/Space-travel-app"
          >
            Github
          </a>
        </div>
      ),
      imgUrl: projImg12,
    },
    {
      title:
        "Space Travel App - Front-End(Ionic) For RootCode Company competition",
      description: (
        <>
          <div>
            <a
              class="hyper"
              href="https://github.com/rasheeek/baylanka_planetTravel"
            >
              Github
            </a>
          </div>
        </>
      ),
      imgUrl: projImg15,
    },
    {
      title: "Smart Home App",
      description: (
        <>
          <div>
            <a
              class="hyper"
              href="https://github.com/VathanSilva/smart-home-apk"
            >
              Github
            </a>
          </div>
        </>
      ),
      imgUrl: projImg16,
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
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back-End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">App</Nav.Link>
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
