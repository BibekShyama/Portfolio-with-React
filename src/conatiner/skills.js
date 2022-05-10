import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class Skills extends Component {
  skills = ["Html", "Css", "JS", "Python", "Unity"];
  render() {
    return (
      <>
        <Card style={{ width: "21rem" }} className="carddetail" bg="primary">
          <Card.Header>Skills</Card.Header>
          <ListGroup variant="flush">
            {this.skills.map((data) => (
              <ListGroup.Item>{data}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        {/* {this.skills.map((data) => (
          <p className="skilldetail">{data}</p>
        ))} */}
      </>
    );
  }
}
export default Skills;
