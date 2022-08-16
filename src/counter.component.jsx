// import { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super();
//     this.state = { counter: props.num };
//     this.counterUp = this.counterUp.bind(this);
//     this.counterDown = this.counterDown.bind(this);
//     this.restart = this.restart.bind(this);
//   }
//   counterUp() {
//     this.setState({ counter: this.state.counter + 1 });
//     if (this.state.counter %7 ===0){
//       console.log("boom");
//     }
//   }
//   counterDown() {
//     this.setState({ counter: this.state.counter - 1 });
//   }

//   restart() {
//     this.setState({ couter: this.state.counter = 0 });
//   }

//   render() {
//     return (
//       <div>
//         <h2>{this.state.counter}</h2>
//         <button onClick={this.counterUp}>up</button>
//         <button onClick={this.counterDown}>Down</button>
//         <button onClick={this.restart}>restart</button>
//       </div>
//     );
//   }
// }

// export default Counter;
