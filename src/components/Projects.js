import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import loyaltyWallet from "../assets/img/loyalty-wallet.png";
import ellebit from "../assets/img/ellebitLogo.png";
import plantMama from "../assets/img/plantMama.png";
import housingPrices from "../assets/img/housingPrices.png"
import waterQuality from "../assets/img/waterQuality.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Loyalty IOS & Android Wallet Membership Digital Card",
      description: "Collaborated with the mobile team at Hawaiian Airlines to develop membership digital cards for loyalty members at Hawaiian Airlines, utilizing Anypoint MQ, Airship, and platform APIs.",
      imgUrl: loyaltyWallet,
      url: 'https://www.hawaiianairlines.com/app', 
    },
    {
      title: "Ellebit",
      description: "Collaborated with a team of four to develop a digital reservation management system using .NET framework, ASP.NET for backend, Visual Studio, AWS, Figma, & GitHub.",
      imgUrl: ellebit,
      url: 'https://www.seattleu.edu/newsroom/2023/solving-real-world-problems-one-project-at-a-time.php#:~:text=Project%3A%20Ellebit%20All%2Din%2DOne%20Private%20Dining%20and%20Catering%20Booking%20Platform%C2%A0%0ASponsor%3A%20Ellebit%C2%A0%0AStudent%20team%3A%20Mari%20Kwee%2C%20Casey%20Nguyen%2C%20Clayton%20Nguyen%20and%20Richard%20Ty%C2%A0%0AFaculty%20advisor%3A%20Nathaniel%20Kremer%2DHerman%2C%20PhD%20%C2%A0', 
    },
  ];

  const projects2 = [
    {
      title: "Housing Prices in King County",
      description: "Developed a machine learning project to classify house prices in King County using python.",
      imgUrl: housingPrices,
      url: 'https://github.com/marikwee/CPSC4310-MLP'
    },
    {
      title: "Water Quality",
      description: "Implemented the data science methodology to investigate water quality in wells in Bangladesh.",
      imgUrl: waterQuality,
      url: 'https://marikwee.github.io/Water-Quality-Project-Mari-Kwee.html'
    },
  ];

  const projects3 = [
    {
      title: "Plant Mama",
      description: "Designed a mobile application using UX design principles to facilitate plant care.",
      imgUrl: plantMama,
      url: 'https://marikwee12.wixsite.com/plantmama'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analytics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UX Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    <Tab.Pane eventKey="second">
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
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
    </section>
  )
}