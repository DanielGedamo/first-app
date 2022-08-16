import { Component } from "react";

class AddUser extends Component{
    constructor (){
        super();
        this.state=
            {F_name:"",
            L_name:"",
            age:"",
            Email:"",
            Password:"",
            password_verification:"",
        }
        this.getF_name= this.getF_name.bind(this)
        this.getL_name= this.getL_name.bind(this)
        this.getAge= this.getAge.bind(this)
        this.getPassword= this.getPassword.bind(this)
        this.getPasswordVerification=this.getPasswordVerification.bind(this)
    }
    getF_name(event){
        this.setstate({F_name:event.target.value})
    };

     getL_name(event){
        this.setstate({L_name: event.target.value})
     };

     getAge(event){
        this.setstate({age:event.target.value})
     };

     getPassword(event){
        this.setstate({Password:event.target.value})
     };
     getPasswordVerification(event){
        this.setstate({password_verification:event.target.value})
     }


    render(){
        return(
            <div>
                <form>
                    <input value={this.state.F_name} onChange={this.getF_name} />
                    <input value={this.state.L_name} onChange={this.getL_name} />
                    <input value={this.state.age} onChange={this.getAge} />
                    <input value={this.state.Password} onChange={this.getPassword} />
                    <input value={this.state.password_verification} onChange={this.getPasswordVerification} />






                </form>
            </div>
        )
    }

}
export default AddUser ;