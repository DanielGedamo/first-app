import {Component} from "react";
import Student from "./Sudent.component";



// let studentArray = [ 
//           <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
// ,         <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
// ,         <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
// ,         <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
// ]; export

class Students extends Component(){
    render(){
        return(
            <div>
         <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
         <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
         <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
         <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />

            </div>

        )
    }
}
export default Students;