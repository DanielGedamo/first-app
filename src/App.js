import Counter from "./counter.component"
import User from "./user.component"
import MyInpunt from"./input.componnent"

function App() {
  return (
    <div>
      {/* <Counter num ={2}/> */}
      <User name ={"daniel" } admin ={true} />
      <MyInpunt />
    </div>
  ); 
}

export default App;
