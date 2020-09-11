import React, { Component } from 'react'

import './Forms.scss'

export default class LoginForm extends Component {
    render() {
        return (

            <form onSubmit={this.onSubmit} >
                <input
                    type='text'
                    name='username'
                    placeholder='Prihlasovacie meno'
                /> <br />
                <input
                    type='password'
                    name='password'
                    placeholder='Heslo'
                /><br />
                <button type='submit'>
                    Login
                </button>
            </form>

        )
    }
}
