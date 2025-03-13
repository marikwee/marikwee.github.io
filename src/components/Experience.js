import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumePdf from "../assets/MariKweeResume.pdf"


export const Experience = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    return (
    <section className="experience" id="experience">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
            <div className="work">
              <h2>Professional Experience</h2>
              {/* Dropdown 1 */}
              <div className="dropdown-container">
                <button
                  className="custom-dropdown-btn"
                  onClick={() => setIsOpen1(!isOpen1)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Software Developer at Hawaiian Airlines</span>
                    <span>July 2023 – Present</span>
                  </div>
                </button>
                {isOpen1 && (
                  <div className="custom-dropdown-menu text-center">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span> <h3>Honolulu, HI</h3></span>
                    <span> <h3> <a href="https://www.hawaiianairlines.com/" target="_blank" rel="noopener noreferrer">
                      www.hawaiianairlines.com
                    </a></h3></span>
                  </div>
                    <p>
                    In my current role as a <b>Software Developer</b> at <b>Hawaiian Airlines</b>, I design, develop, and maintain <b>loyalty</b> systems that support both <b>Hawaiian Airlines</b> and <b>Alaska Airlines</b>. 
                    I actively contribute to <b>cross-functional</b> initiatives and <b>system enhancements</b>, collaborating closely with the Alaska Airlines Loyalty team to help establish a <b>unified</b> loyalty program. 
                    I successfully implemented functionality that allows Alaska Airlines members to earn miles on Hawaiian Airlines flights. 
                    I addressed and <b>resolved</b> accrual discrepancies for HawaiianMiles members, successfully reducing mismatches from approximately <b>20%</b> to less than <b>1%</b>. 
                    I <b>lead</b> the effort to optimize error handling for mileage accruals, <b>streamlining</b> the remediation process for Hawaiian Airlines agents and <b>enhancing</b> the overall customer experience. <br /> <br />

                    My <b>technical</b> contributions include developing backend workers in <b>Go</b> hosted on <b>AWS</b> to automate the accrual process, designing <b>SQL</b> scripts for database management and optimization, and building <b>Grafana</b> dashboards to monitor system performance and visualize key metrics. 
                    I also write and manage <b>JIRA</b> stories to track development tasks, implement <b>unit</b> and <b>integration</b> tests to ensure code quality, and <b>collaborate</b> with cross-functional teams to deliver impactful features. 
                    Additionally, I’ve served as a <b>mentor</b> to an intern, offering guidance in both technical skill development and professional growth.
                    </p>
                  </div>
                )}
              </div>
              {/* Dropdown 2 */}
              <div className="dropdown-container">
                <button
                  className="custom-dropdown-btn"
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Student Software Developer at Ellebit</span>
                    <span>September 2022 – June 2023</span>
                  </div>
                </button>
                {isOpen2 && (
                  <div className="custom-dropdown-menu text-center">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span> <h3>Seattle, WA</h3></span>
                    <span> <h3> <a href="https://www.seattleu.edu/newsroom/2023/solving-real-world-problems-one-project-at-a-time.php#:~:text=Project%3A%20Ellebit%20All%2Din%2DOne%20Private%20Dining%20and%20Catering%20Booking%20Platform%C2%A0%0ASponsor%3A%20Ellebit%C2%A0%0AStudent%20team%3A%20Mari%20Kwee%2C%20Casey%20Nguyen%2C%20Clayton%20Nguyen%20and%20Richard%20Ty%C2%A0%0AFaculty%20advisor%3A%20Nathaniel%20Kremer%2DHerman%2C%20PhD%20%C2%A0" target="_blank" rel="noopener noreferrer">
                      www.ellebit.com
                    </a></h3></span>
                    </div>
                    <p>
                    For my senior capstone project, I was given the opportunity to work with a startup company, Ellebit, and build their web application 
                    from the ground up. Ellebit is an all-in-one booking platform to easily manage reservations for private dining and catering in real time.
                    I worked in a team of four, and we went through the phases of design, development, testing, and deployment to build their reservation management system. 
                    We worked in an agile environment where we had weekly standup meetings with our sponsors. 
                    We communicated with our sponsors the work we had completed and planned for work they wanted us to complete. 
                    We communicated our concerns, clarifying questions, and successes. I learned a lot about the software development lifecyle from this experience
                    along with new skills, new programming languages, and professionalism. 
                    </p>
                  </div>
                )}
              </div>
               {/* Dropdown 3 */}
               <div className="dropdown-container">
                <button
                  className="custom-dropdown-btn"
                  onClick={() => setIsOpen3(!isOpen3)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span> Software Developer Intern at Hawaiian Airlines</span>
                    <span>June 2022 – September 2022</span>
                  </div>
                </button>
                {isOpen3 && (
                  <div className="custom-dropdown-menu text-center">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span> <h3>Honolulu, HI</h3></span>
                    <span> <h3> <a href="https://www.hawaiianairlines.com/" target="_blank" rel="noopener noreferrer">
                      www.hawaiianairlines.com
                    </a></h3></span>
                    </div>
                    <p>
                    This summer, I interned at Hawaiian Airlines as a software developer intern for the Loyalty Team. 
                    The Loyalty team at Hawaiian Airlines is responsible for working with passenger's Hawaiian miles in terms of accruals and redemptions.
                    I worked with SQL and Golang on Hawaiian Airlines Passenger Service System transition from sabre to amadeus.
                    I learned how to work in an Agile enviroment, participating in scrum meetings and weekly standups. 
                    I collaborated everyday with my team by sharing what I accomplished throuout the day and whether I came accross any blockers. 
                    I regularly asked questions to get familiar with the projects, and I showed my passion for my work.
                    I learned how each department communicates and depends on one another. Getting ahead of these dependencies are crucial for accomplishing work by the deadline.
                    During the internship, I not only learned more about software development, but I also learned about Hawaiian Airlines purpose and values that I will carry with me through the rest of my career.
                    These four values include Malama (care), Hookipa (hospitality), Pookela (excellence), and Lokahi (collaboration). 
                    This internship was such a great experience to not only learn more about software development, but also how to problem solve, to be confident in my abilities, and to collaborate. 
                    </p>
                  </div>
                )}
                <div>
                  <div>
                    <h4> <a className="resume" href={resumePdf} target="_blank" rel="noopener noreferrer">
                      View Full Resume
                    </a>
                    </h4>
                  </div>
                </div>
                </div>
            </div>
          </Col>       
        </Row>
      </Container>
    </section>
  );
};