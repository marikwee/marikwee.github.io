import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/mari-portrait-header.jpg"
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Software Developer", "Data Scientist", "UX Design" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    return (
        <section className="banner" id="about">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h1>
                        <span>{`Mari Kwee`}</span>
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Backend Engineer", "Data Scientist" ]'><span className="wrap">{text}</span></span>
                    </h1>
                      <p>Hi, my name is Mari Kwee. I am a <b>Software Developer</b> at <b>Hawaiian Airlines</b> with a strong background in designing and optimizing backend systems.
                            I design, develop, and maintain <b>loyalty </b> systems that support both <b>Hawaiian Airlines</b> and <b>Alaska Airlines</b>. 
                            I play a key role in improving the loyalty systems, where I have reduced accrual discrepancies from 20% to less than 1%.
                            I have developed automated workers and monitoring tools that enhance system performance and data accuracy.
                            I have extensive knowledge of the loyalty systems along with a deepened understanding of working at an airlines company as a whole. 
                            I graduated from <b>Seattle University</b> in June of 2023 with a major in <b>Computer Science</b> and minor in <b>Data Science</b>. 
                            I am passionate about problem solving, collaboration, and mentorship.
                            I am interested in <b>backend development</b>, <b>machine learning</b>, <b>data analytics</b>, and <b>web development</b>.</p>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img" style={{ width: "50%", height: "auto" }}/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }