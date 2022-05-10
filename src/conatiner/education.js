import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class Education extends Component {
  eduction = [
    {
      name: "EGPS",
      level: "SLC",
    },
    {
      name: "SS College",
      level: "+2",
    },
    {
      name: "KhCE",
      level: "Bachelor",
    },
  ];
  render() {
    return (
      <>
        <Card style={{ width: "21rem" }} className="carddetail" bg="primary">
          <Card.Header>Education</Card.Header>
          <ListGroup variant="flush">
            {this.eduction.map((data) => (
              <ListGroup.Item>
                {data.name}: {data.level}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        {/* {this.eduction.map((data) => (
          <p className="educationdetail">
            {data.name}: {data.level}
          </p>
        ))} */}
      </>
    );
  }
}
export default Education;
