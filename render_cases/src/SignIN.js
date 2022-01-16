import React, { Component } from 'react'
import './signin.css'
import rasm from './Component 1.png'
class SignIN extends Component {
    render() {
        return (
            <div className='wrapper'>
                <img src={rasm} />
                <h1 className='title'>LOGIN</h1>
                <input placeholder='Username' />
                <input placeholder='Password' />
                <button className='btn'>LOGIN</button>
                <button className='btn2' onClick={this.props.onClick}>SignUP</button>
            </div>
        )
    }
}
export default SignIN