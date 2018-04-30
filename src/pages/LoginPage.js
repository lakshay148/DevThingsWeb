import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";


/**    AUTHOR :
*      Lakshay
*
*    Description :
*
*    CUSTOMIZABLE ITEMS :
*
*    DEPENDENCY :
*
*
*/

class LoginPage extends Component {

    submit(data){
        console.log(data)
    }


    render(){
        return (<div>
            <div>Login Page
            </div>
            <LoginForm submit={this.submit}/>
        </div>)
    }
}



export default LoginPage;