import Student from "./Sudent.component";
import Students from "./students.component";
function Home(props){
    return(
        <div>
            <h1>
              <h1>welcome</h1>
              {props.name}  
            </h1>
            <Student firstName ="daniela" lestName ="gedamo" date ={new Date ("1990.01.01").getFullYear()} pic ="logo512.png" />
      <Students/>
        </div>
    )
}
export default Home;