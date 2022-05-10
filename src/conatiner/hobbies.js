import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class Hobbies extends Component {
  hobbies = ["Football", "Basketball", "Gaming", "Music", "Dance"];
  render() {
    return (
      <>
        <Card style={{ width: "21rem" }} className="carddetail" bg="primary">
          <Card.Header>Hobbies</Card.Header>
          <ListGroup variant="flush">
            {this.hobbies.map((data) => (
              <ListGroup.Item>{data}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        {/* {this.hobbies.map((data) => (
          <p className="hobbiesdetail">{data}</p>
        ))} */}
      </>
    );
  }
}
export default Hobbies;
