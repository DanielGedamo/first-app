import { Component } from "react";

class Student extends Component {
  constructor(props) {
    super();
    this.props = props
  }
  render() {
    return (
      <div>
        <h1>{this.props.firstName}</h1>
        <h1>{this.props.lestName}</h1>
        <h1>{this.props.date}</h1>
        <img src={this.props.pic} alt="" />
      </div>
    );
  }
}
export default Student;
