import React, { Component } from 'react'

import './Header.scss'

import Navbar from '../Navbar/Navbar'
import { ReactComponent as Logo } from '../../assets/coworkingLogo.svg'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Logo className='logo' />
                <Navbar />
            </div>
        )
    }
}
