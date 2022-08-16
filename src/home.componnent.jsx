import { Component } from "react";
import AddUser from "./AddUser.component";



class Home extends Component{
    constructor (){
        super();
        

    }


    render(){
        return(
            <div>
            <AddUser/>
            </div>
        )
    }
}
export default Home