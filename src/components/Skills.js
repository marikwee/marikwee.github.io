import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import goImg from "../assets/img/go-gopher-svgrepo-com.svg";
import dotNetImg from "../assets/img/dotNet-img.svg";
import sqlImg from "../assets/img/sql.svg";
import awsImg from "../assets/img/aws-img.svg";
import postmanImg from "../assets/img/postman-img.svg";
import agileImg from "../assets/img/agile-svgrepo-com.svg";
import softSkillsImg from "../assets/img/problem-solving-skill-svgrepo-com.svg";
import githubImg from "../assets/img/github-img.svg";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={goImg} alt="Image" />
                                    <h5>Programming Languages</h5> 
                                    <h6>Go, C#, C++, C, Java, Python, SQL, R</h6>
                                </div>
                                <div className="item">
                                    <img src={dotNetImg} alt="Image" />
                                    <h5>Web Development</h5>
                                    <h6>.NET Core, ASP.NET, HTML, CSS, JavaScript, React, Angular</h6>
                                </div>
                                <div className="item">
                                    <img src={sqlImg} alt="Image" />
                                    <h5>Database Management</h5>
                                    <h6>Microsoft SQL Server, MySQL, Redis</h6>
                                </div>
                                <div className="item">
                                    <img src={awsImg} alt="Image" />
                                    <h5>Cloud Computing & DevOps</h5>
                                    <h6>AWS, Microsoft Azure, Docker, Kubernetes, Bamboo, CI/CD pipelines</h6>
                                </div>
                                <div className="item">
                                    <img src={githubImg} alt="Image" />
                                    <h5>Software Development Tools</h5>
                                    <h6>Git, GitHub, Bitbucket</h6>
                                </div>
                                <div className="item">
                                    <img src={postmanImg} alt="Image" />
                                    <h5>Testing & Debugging</h5>
                                    <h6>Postman</h6>
                                </div>
                                <div className="item">
                                    <img src={agileImg} alt="Image" />
                                    <h5>Agile Methodology</h5> 
                                    <h6>Agile, Scrum, Kanban, Jira</h6>
                                </div>
                                <div className="item">
                                    <img src={softSkillsImg} alt="Image" />
                                    <h5>Soft Skills</h5> 
                                    <h6>Problem solving, Adaptable, Organized, Time Management, Teamwork, Communication, Mentorship</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}