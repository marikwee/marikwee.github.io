import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-img.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/marikwee/"><img src={navIcon1} alt="" target="_blank" rel="noopener noreferrer" /></a>
              <a href="https://github.com/marikwee?action=show&controller=profiles&tab=contributions&user_id=marikwee"><img src={navIcon2} alt="" target="_blank" rel="noopener noreferrer" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}