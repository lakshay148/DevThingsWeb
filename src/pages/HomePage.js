import React, { Component } from "react";
import { Link } from 'react-router-dom';

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

class HomePage extends Component {

    render(){
        return (<div>
            HomePage
            <Link to="/login" >Login</Link>
        </div>)
    }
}


export default HomePage;