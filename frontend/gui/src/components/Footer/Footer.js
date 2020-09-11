import React, { Component } from 'react'

import AnnouncementForm from '../Forms/AnnouncementForm'
import LoginForm from '../Forms/LoginForm'

import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div>
                    <LoginForm />
                </div>
                <div>
                    <AnnouncementForm />
                </div>

            </footer>
        )
    }
}

export default Footer