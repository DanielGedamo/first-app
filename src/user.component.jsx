import { Component } from "react";

class User extends Component {
  constructor(props) {
    super();
    this.state = {
      Fname: "NO NAME",
      Lname: "",
      age: "",
      password: "",
      email: "",
    };
    this.printName = this.printName.bind(this);
    this.changeName = this.changeName.bind(this);
    this.seandToTable =this.seandToTable.bind(this)
  }
  printName() {
    console.log(this.state.Fname);
  }
  getFnameValue(event) {
    this.setState({ Fname: event.target.value });
  }
  getValueOfLname(event) {
    this.setState({ Lname: event.target.value });
  }
  getAge(event) {
    this.setState({ age: event.target.value });
  }
  getPassword(event){
    this.setState({password:event.target.value})
  }
  getEmail(event){
   this.setState({email:event.target.value})
  }
  changeName() {
    this.setState({
      Fname: "gedamo",
    });
  }
  seandToTable(e) {
    e.preventDefault()
    return(
      document.getElementById("myTable").innerHTML = `<table><thead>
      <th>first name</th> 
      <th>last name</th>
       <th>age</th>
       <th>email</th>
        <th>password</th>
         </thead>
      <tbody>
      <tr>
       <td>${this.state.Fname}</td>
       <td>${this.state.Lname}</td>
       <td>${this.state.age}</td>
       <td>${this.state.email}</td>
       <td>${this.state.password}</td>
       </tr>
       </tbody>
      </table>`)
  }
  render() {
    return (
      <div>
        <button onClick={this.printName}>Click to print</button>
        {this.props.admin ? (
          <button onClick={this.changeName}>Click to change</button>
        ) : null}
        {/* <h1>{this.state.Fname}</h1> */}
        <form>
          <label>first name</label>
          <input
            type="text" value={this.state.Fname} onChange={(e) => { this.getFnameValue(e);}}/>
          <br></br>
          <label>Least name</label>
          <input type="text" value={this.state.Lname}onChange={(e) => {this.getValueOfLname(e);}} />
          {/* <p>{this.state.Lname}</p> */}
          <label>Age</label>
          <input type="text" value={this.state.age} onChange={(e) => this.getAge(e)}/>
          {/* <p>{this.state.age}</p> */}
          <br></br>
          <label>Password</label>
          {/* <p>{this.state.password}</p> */}
          <input type="text" value={this.state.password} onChange={(e)=>this.getPassword(e)} /><br></br>
          <label htmlFor="">E-mail</label>
          {/* <p>{this.state.email}</p> */}

          <input type="text" value={this.state.email} onChange={(e)=>this.getEmail(e)} />
          <button onClick={this.seandToTable}>seand</button>
        </form>
        <div id="myTable"></div>
      </div>
    );
  }
}

export default User;
