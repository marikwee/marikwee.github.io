import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {

  return (
      <section className="contact" id="connect">
          <Container>
              <Row>
                  <Col>
                      <div className="contact-bx">
                          <h2>
                              Let's Connect!
                          </h2>
                          <h5><a
                            href="mailto:marikwee12@gmail.com?subject=Let's Connect&body=Hi there!" className="custom-mail-link"
                          >
                            Send me an email
                          </a>
                           {" "}at marikwee12@gmail.com
                          </h5>                          
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}
