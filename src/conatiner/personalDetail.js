import { Component } from "react";
import Image from "react-bootstrap/Image";
import pic from "./rdj.jpg";

class PersonalDetail extends Component {
  render() {
    return (
      <div className="personaldetaildiv">
        {/* <image src={pic}  */}
        <Image
          className="profilepic"
          src={pic}
          //   roundedCircle
          fluid
          thumbnail
          width={150}
        ></Image>
        <p className="personaldetail">
          Name: Bibek shyama<br></br>
          Age: 24<br></br>
          Address: Bhaktapur<br></br>
          <a href="https://github.com/BibekShyama" target="_blank">
            Github
          </a>
        </p>
      </div>
    );
  }
}
export default PersonalDetail;
