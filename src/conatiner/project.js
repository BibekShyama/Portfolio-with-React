import { Component } from "react";
import { Table } from "react-bootstrap";

class Project extends Component {
  project = [
    {
      id: 1,
      name: "Project-1",
      description: "Project made via React JS",
    },
    {
      id: 2,
      name: "Project-2",
      description: "Project made via Node JS",
    },
    {
      id: 3,
      name: "Project-3",
      description: "Project made via Express",
    },
    {
      id: 4,
      name: "Project-4",
      description: "Project made via Mongooes",
    },
    {
      id: 5,
      name: "Project-5",
      description: "Project made via MERN Stack",
    },
  ];
  render() {
    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Project Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.project.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
export default Project;
