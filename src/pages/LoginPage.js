import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { login } from "../actions/auth"

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

    submit = (data) =>
        this.props.login(data).then(()=>this.props.history.push("/"))


    render(){
        return (<div>
            <div>Login Page
            </div>
            <LoginForm submit={this.submit}/>
        </div>)
    }
}

LoginPage.propTypes = {
    history : PropTypes.shape({
        push : PropTypes.func.isRequired
    }).isRequired,
    login : PropTypes.func.isRequired
}



export default connect(null, {login})(LoginPage);