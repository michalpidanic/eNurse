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
                <div>
                    <p><a>Random</a></p>
                    <p><a>odkazy</a></p>
                    <p><a>na nejake</a></p>
                    <p><a>stranky nase</a></p>
                </div>

            </footer>
        )
    }
}

export default Footer