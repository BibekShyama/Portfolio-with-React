import { Component } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
// import Marquee from "react-easy-marquee";
import Marquee from "react-fast-marquee";
import Education from "./education";
import Footer from "./footer";
import Hobbies from "./hobbies";
import PersonalDetail from "./personalDetail";
import Project from "./project";
import Skills from "./skills";

class Portfoilo extends Component {
  state = {
    Project: false,
  };
  showProject = () => {
    this.setState({
      Project: !this.state.Project,
    });
  };

  render() {
    return (
      <>
        <div className="portfoilo">
          <Marquee gradientWidth={0} speed="150">
            <h1 className="portfoilodiv">Portfoilo</h1>
          </Marquee>
          <Container className="containerdetail">
            <Row>
              <PersonalDetail />
            </Row>
            <Row>
              <Col>
                {/* <h3>Education</h3> */}
                <Education />
                <br></br>
                <Button onClick={this.showProject} variant="primary">
                  Projects
                </Button>
              </Col>
              <Col>
                {/* <h3>Skills</h3> */}
                <Skills />
              </Col>
              <Col>
                {/* <h3>Hobbies</h3> */}
                <Hobbies />
              </Col>
            </Row>
            <br></br>
            <Row>{this.state.Project && <Project />}</Row>
            {/* <Footer /> */}
          </Container>
        </div>
      </>
    );
  }
}
export default Portfoilo;
