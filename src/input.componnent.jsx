import { Component } from "react";
class MyInpunt extends Component {
  constructor(props) {
    super();
    this.state={name:""}
  }
  getValue(event){
   
   console.log(this.setState({name:event.target.value}));
  }


  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <input value={this.state.name}onChange={(e)=> {this.getValue(e)}} />
      </div>
    );
  }
}
export default MyInpunt
