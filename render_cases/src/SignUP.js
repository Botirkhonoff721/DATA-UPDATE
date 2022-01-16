import React, { Component } from 'react'
import './signup.css'

 class SignUP extends Component {
    render() {
        return (
            <div>
                 <h1>bu SignUP</h1>
                <button onClick={this.props.onClick}>SignIN</button>
            </div>
        )
    }
}
export default SignUP