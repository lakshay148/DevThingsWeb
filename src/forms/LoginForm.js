import React, { Component } from "react";
import { Form , Button } from "semantic-ui-react";
import Validator from "validator";
import InLineError from "./InLineError";

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

class LoginForm extends Component {

    state = {
        errors : {},
        data : {
            email : '',
            password : ''
        },
        loading : false
    }

    onChange = e => this.setState({ data : { ...this.state.data , [e.target.name] : e.target.value}})

    onSubmit= () => {
        const errors = this.validate(this.state.data)
        this.setState({errors})
        if(Object.keys(errors).length ===0){
            this.props.submit(this.state.data)
        }
    }

    validate(data){
        const errors = {}
        if(!data.password)
            errors.password = "cant be blank"

        if(!Validator.isEmail(data.email))
            errors.email = "Invalid email"

        return errors;
    }

    render(){
        const { data,errors } = this.state;
        return (<Form onSubmit={this.onSubmit}>
            <Form.Field error={!!errors.email}>
                <label htmlFor="email" >Email</label>
                <input
                    type='email'
                    placeholder={'email'}
                    value={data.email}
                    onChange={this.onChange}
                    name='email' />
            </Form.Field>
            <div>
            { errors.email && <InLineError text={errors.email}/>}
            </div>
            <Form.Field error={!!errors.password}>
                <label htmlFor="password" >password</label>
                <input
                    type='password'
                    placeholder={'password'}
                    value={data.password}
                    onChange={this.onChange}
                    name='password' />
            </Form.Field>
            <div>
            { errors.password && <InLineError text={errors.password}/>}
            </div>
            <Button primary>Login</Button>
        </Form>)

    }
}



export default LoginForm;